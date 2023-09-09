from typing import final

import requests

from server.apps.identity.models import User
from server.common import pydantic_model
from server.common.services import http


@final
class UserResponse(pydantic_model.BaseModel):
    """Schema for API response with :term:`lead_id`."""

    id: int


# TODO: use redis-based caching
@final
class LeadCreate(http.BaseFetcher):
    """Service around creating new users and fething their :term:`lead_id`."""

    _url_path = '/users'

    def __call__(
        self,
        *,
        user: User,
    ) -> UserResponse:
        """Create remote user and return assigned ids."""
        response = requests.post(
            self.url_path(),
            json=_serialize_user(user),
            timeout=self._api_timeout,
        )
        response.raise_for_status()
        return UserResponse.parse_raw(response.text)


@final
class LeadUpdate(http.BaseFetcher):
    """Service around editing users."""

    _url_path = '/users/{0}'

    def __call__(
        self,
        *,
        user: User,
    ) -> None:
        """Update remote user."""
        response = requests.patch(
            self.url_path().format(user.lead_id),
            json=_serialize_user(user),
            timeout=self._api_timeout,
        )
        response.raise_for_status()


def _serialize_user(user: User) -> dict[str, str]:
    if user.date_of_birth is not None:
        date_of_birth = user.date_of_birth.strftime('%d.%m.%Y')
    else:
        date_of_birth = ''

    return {
        'name': user.first_name,
        'last_name': user.last_name,
        'birthday': date_of_birth,
        'city_of_birth': user.address,
        'position': user.job_title,
        'email': user.email,
        'phone': user.phone,
    }

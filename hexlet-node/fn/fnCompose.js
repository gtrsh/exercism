/*
const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];

getFreeDomainsCount(emails);
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };
 */

/*
LODASH VERSION:
import get from 'lodash/get';

const getFreeDomainsCount = (emails) => emails
  .map((email) => {
    const [, domain] = email.split('@');
    return domain;
  })
  .filter((domain) => freeEmailDomains.includes(domain))
  .reduce((acc, domain) => {
    const count = get(acc, domain, 0) + 1;
    return { ...acc, [domain]: count };
  }, {});

export default getFreeDomainsCount;
 */

const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
];

const getDomains = (email) => {
    const tmp = email.split('@');
    return tmp[tmp.length - 1];
};

const filterFreeDomainEmails = (domain) => freeEmailDomains.includes(domain);

const reduceDomains = (acc, domain) => {
    acc[domain] = (acc[domain] ?? 0) + 1;
    return acc;
};

const getFreeDomainsCount = (emails) => (
    emails
        .map(getDomains)
        .filter(filterFreeDomainEmails)
        .reduce(reduceDomains, {})
);

export default getFreeDomainsCount;

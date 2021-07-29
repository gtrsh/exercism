/*
// Если домен передан без указания протокола,
// то по умолчанию берется http
getDomainInfo('yandex.ru')
// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }

getDomainInfo('https://hexlet.io');
// {
//   scheme: 'https',
//   name: 'hexlet.io',
// }

getDomainInfo('http://google.com');
// {
//   scheme: 'http',
//   name: 'google.com',
// }
 */

export default (domain) => {
    const scheme = domain.startsWith('https://')
        ? 'https' : domain.startsWith('http://')
            ? 'http' : 'http';

    let name = domain;
    if (domain.startsWith('https://')) {
        name = domain.replace('https://', '');
    } else if (domain.startsWith('http://')) {
        name = domain.replace('http://', '');
    }

    return { scheme, name };
};

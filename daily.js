'use strict';
// Content is generated from the two local, author-reviewed Markdown manuscripts.
function setDailyLanguage(language, updateUrl = false) {
  const lang = DAILY_CONTENT[language] ? language : 'es';
  const content = DAILY_CONTENT[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = content[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  const body = document.querySelector('.article-body');
  if (body) body.innerHTML = content.body;
  document.querySelectorAll('[data-lang]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  });
  document.querySelectorAll('[data-language-link]').forEach(link => {
    const url = new URL(link.getAttribute('href'), location.href);
    url.searchParams.set('lang', lang);
    link.href = url.href;
  });
  const isArticle = document.body.dataset.dailyPage === 'article';
  document.title = (isArticle ? content.title : 'The Daily') + ' — Jhoan Salinas';
  document.querySelector('meta[name="description"]').content = isArticle ? content.summary : content.intro;
  try { localStorage.setItem('retro-lang', lang); } catch (error) {}
  if (updateUrl) {
    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    try { history.replaceState(null, '', url); } catch (error) {}
  }
}
document.querySelectorAll('[data-lang]').forEach(button => {
  button.addEventListener('click', () => setDailyLanguage(button.dataset.lang, true));
});
let dailyLanguage = 'es';
try { dailyLanguage = localStorage.getItem('retro-lang') || 'es'; } catch (error) {}
const requestedLanguage = new URLSearchParams(location.search).get('lang');
if (requestedLanguage === 'es' || requestedLanguage === 'en') dailyLanguage = requestedLanguage;
setDailyLanguage(dailyLanguage);

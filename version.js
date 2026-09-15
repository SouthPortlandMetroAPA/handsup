/* HandsUp — single global version constant (see CountMeIn/version.js for the pattern).
   Deploy: bump here → git push → poll the served version.js → UPDATE apa_core.apps
   SET version=$NEW WHERE app_name='HandsUp'  (serve-then-bump, reference_deploy.md). */
window.APP_VERSION = '0.5';

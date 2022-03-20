function getHost() {
  const gitUrl = 'global_barristers';
  let HOST = document.location.origin + '/';
  if (document.location.href.includes(gitUrl)) {
    HOST += gitUrl + '/';
  }
  return { HOST, gitUrl };
}

export default getHost;

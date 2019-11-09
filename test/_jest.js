const fetch = function(url) {
  return Promise.resolve({
    text: () => fetch.stubs[url].shift()
  });
};

fetch.stubs = {};

fetch.stub = (url) => {
  if(!fetch.stubs[url])
    fetch.stubs[url] = [];

  return {
    with: content => fetch.stubs[url].push(content)
  };
};

fetch.reset = () => fetch.stubs = {};

global.fetch = fetch;
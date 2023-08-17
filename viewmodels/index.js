function MainViewmodel(sdk) {
  // INITIALIZATION
  let self = this;
  self.sdk = sdk;
  self.isLoadingLogin = false;

  let observers = [];

  // AUTHENTICATION

  const startLoginWithPhantomSuccess = (response) => {
    self.isLoadingLogin = false;
    notify();
  };

  const startLoginWithPhantomError = (error) => {
    self.isLoadingLogin = false;
    self.loginError = error;
    notify();
  };

  self.startLoginWithPhantom = (data) => {
    self.isLoadingLogin = true;
    notify();
    self.sdk.startLoginWithPhantom()
      .then(startLoginWithPhantomSuccess)
      .catch(startLoginWithPhantomError);
  };

  self.isLoading = () => {
    return self.isLoadingLogin;
  }

  // OBSERVER PATTERN

  function notify() {
    observers.forEach(function (fn) { fn(self); });
  };

  self.observe = function (callback) {
    observers.push(callback);
    notify();
  };

  self.stopObserving = function (callback) {
    observers = observers.filter(function (observer) {
      return observer != callback;
    });
  }

  return self;
};

module.exports = MainViewmodel;


//programming assignment 11


const client = (() => {
    let serviceWorker = undefined;
    const notificationButton = document.getElementById('btn-notify');

    const showNotificationButton = () => {
        notificationButton.style.display = "block";
    }

    const checkNotificationSupport = () => {
       
        if (!('Notification' in window)) {
          return Promise.reject("This browser does not support notifications");
        }
        console.log("the browser support notifications")
        return Promise.resolve("ok");
    }
   
    const registerServiceWorker = () => {
        if (!('serviceworker' in navigator)) {
            return Promise.reject("service worker is not available");
        }
        return  navigator.serviceWorker.register('../service-worker.js')
        .then(regObj => {
            console.log('service worker is registered successfully');
            serviceWorkerRegObj = regObj;
            showNotificationButton();
        })
        
    }

    const requestNotificationPermissions = () => {
        return Notification.requestPermission(status => {
            console.log("Notifications Permission Status: ", status)
        })
        
        
    }


    checkNotificationSupport()
      .then(registerServiceWorker())
      .then(requestNotificationPermissions())
      
      .catch((err) => console.error(err));


})();
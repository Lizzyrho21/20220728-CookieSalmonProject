//We want to find the total amount of customers and randomize it. We can use this function throughout our code.
function getRandomNumberOfCustomersGivenARange(minCustomers, maxCustomers) {
    return (Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers); // if we get 0 we start at mincustomers, otherwise we multiply difference between max and min time 0 or 1 adding 1 because zero based
  }
  
  //set the business hours from the stakeholder info in a variable we can use again
  const biznessHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];
  
  // first object 'Seattle'.
  let Seattle = {
    locationName: 'Seattle',
    minCustomers: 23, // ALL this info was given in instructions!
    maxCustomers: 65, 
    avgCookieSale: 1, 
    // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
    customersPerHour: [], // need an array to store all the customer numbers per hour
    cookiesSoldPerHour: [], 
    totalDailyCookies : 0,
    
    // methods~
  
   // method 1- Get customer function with randomizer
    getCustomersPerHour: function () {
            const table =  document.getElementById('cookieData');


            const locationData = cookieData.insertRow();
        for (let index = 0; index < biznessHours.length; index++) {
            // Add computed average customer value for EACH HOUR to our array.
            // the 'this' keyword... the props we using are in this class so we need 'this'
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));// pass in min customers. pass in max customers.;  
            //console.log(this.customersPerHour[index]);         
        }
        
        
        
    },
  
    // now based on an AVERAGE number of customers for a GIVEN hr, we need to use that value from array random number along with data given for avg cookies per person and calcualte a guesstimate at number of cookies
   
    //2 method~ getCookiesSoldPerHour
  
    getCookiesSoldPerHour: function () {
        // initialize an ongoing total
        this.getCustomersPerHour(); // load up customer data from last function
        // lets load up our cookiesSoldPerHour by walking through each element in our average customers per hour array (number of customers * cookies sold per customer)
            //loop returns again for each hour
          for (let index = 0; index < biznessHours.length; index++) {
            // Calc number of cookies
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
            // Lets floor it so we get a whole number
            this.cookiesSoldPerHour.push(dailyCookies); // multiply the 2 values shove as new element into cookies sold array          
            // add to total
            this.totalDailyCookies+=dailyCookies; //adding to the daily cookies
           
          
            
            
            
        }
        console.log(this.cookiesSoldPerHour); //code works!!
        
    },

    locationTableData: [],

    getLocationTableData: function()
    {
        this.locationTableData.push(this.locationName);
        for(let i = 0; i < this.cookiesSoldPerHour.length; i++)
        {
            this.locationTableData.push(`${this.cookiesSoldPerHour[i]} cookies`);
        }
        this.locationTableData.push(this.totalDailyCookies);
        
    },

    render() {
        this.getCustomersPerHour();
        this.getLocationTableData();
        let rowData = document.getElementById('cookieData');


        let dataLocation = rowData.insertRow();
        for(let i = 0; i < this.locationTableData; i++)
        {

            let dataCell = dataLocation.insertCell();
            dataCell.textcontent = this.locationTableData[i];
        }



    }
  }
  Seattle.render();
Seattle.getCookiesSoldPerHour();


console.log(Seattle.locationTableData);

//     render() {
//         this.getCookiesSoldPerHour(); //call a function
//         //Declared a variable ane named it the elemetn we will be putting it in.
//         const unorderedList = document.getElementById('Seattle'); //grab Seattle in HTML
//         //This is how we pull the hours!
//         for (let i = 0; i < 15; i++) {
//           //declared another variable we will be putting in HTML 
//             const listItem = document.createElement('li');
//             // text content just makes text show up(Think of an alert with string concatenation!)
//             listItem.textContent = biznessHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
//             //basically adding the chuld 'listItem' into 'unorderedList'
//             unorderedList.appendChild(listItem);
//         }
//         const listItem = document.createElement('li');
//         listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//         unorderedList.appendChild(listItem);
//     }
  
  
//   }
  
//   // Seattle.getCustomersPerHour();
//   //Seattle.getCookiesSoldPerHour();
//   console.log(Seattle.cookiesSoldPerHour);
//   Seattle.render();
  
  
  
//   let Tokyo = {
    
//     minCustomers: 3,
//     maxCustomers: 24, 
//     avgCookieSale: 1.2, 
//     // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
//     customersPerHour: [], // need an array to store all the customer numbers per hour
//     cookiesSoldPerHour: [], 
//     totalDailyCookies : 0,
    
//     // methods
//    //1
//     getCustomersPerHour: function () {
//         //Use our random customer method. in same obj/instance so use 'this'
//         // add each random num of custs to our array where each index aligns with an hour in the day array
//         for (let index = 0; index < biznessHours.length; index++) {
//             // Add computed average customer value for each hour to our array/list
//             // the 'this' keyword... the props we using are in this class so we need 'this'
//             this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));// pass in min customers. pass in max customers.;  
//             //console.log(this.customersPerHour[index]);         
//         }
//         // lets see if we r even close. lets add some debug..... string literal
        
        
//     },
  
//     // now based on an average number of customers for a given hr, we need to us that value from array rando number along with data given for avg cookies per person and calcualte a guesstimate at number of cookies
//    //2
//     getCookiesSoldPerHour: function () {
//         // initialize an ongoing total
//         //totalDailyCookies = 0;
//         this.getCustomersPerHour(); // load up customer data
//         // lets load up our cookiesSoldPerHour by walking through each element in our average customers per hour array (number of customers * cookies sold per customer)
//         for (let index = 0; index < biznessHours.length; index++) {
//             // Calc number of cookies
//             let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
//             // Lets floor it so we get a whole number
//             this.cookiesSoldPerHour.push(dailyCookies); // multiply the 2 values shove as new element into cookies sold array          
//             // add to total
//             this.totalDailyCookies+=dailyCookies; //adding to the daily cookies
           
          
            
            
            
//         }
//         console.log(this.cookiesSoldPerHour); //code works!!
        
//     },
//    //3
//     render() {
//         this.getCookiesSoldPerHour(); //call a function
//         const unorderedList = document.getElementById('Tokyo'); //grab Seattle in HTML
//         for (let i = 0; i < 15; i++) {
//             const listItem = document.createElement('li');
//             // 6am: 16 cookies
//             listItem.textContent = biznessHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
//             unorderedList.appendChild(listItem);
//         }
//         const listItem = document.createElement('li');
//         listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//         unorderedList.appendChild(listItem);
//     }
  
  
//   }
//   Tokyo.render();
  
  
  
  
  
//   let Dubai = {
    
//     minCustomers: 11,
//     maxCustomers: 38, 
//     avgCookieSale: 3.7, 
//     // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
//     customersPerHour: [], // need an array to store all the customer numbers per hour
//     cookiesSoldPerHour: [], 
//     totalDailyCookies : 0,
    
//     // methods
//    //1
//     getCustomersPerHour: function () {
//         //Use our random customer method. in same obj/instance so use 'this'
//         // add each random num of custs to our array where each index aligns with an hour in the day array
//         for (let index = 0; index < biznessHours.length; index++) {
//             // Add computed average customer value for each hour to our array/list
//             // the 'this' keyword... the props we using are in this class so we need 'this'
//             this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));// pass in min customers. pass in max customers.;  
//             //console.log(this.customersPerHour[index]);         
//         }
//         // lets see if we r even close. lets add some debug..... string literal
        
        
//     },
  
//     // now based on an average number of customers for a given hr, we need to us that value from array rando number along with data given for avg cookies per person and calcualte a guesstimate at number of cookies
//    //2
//     getCookiesSoldPerHour: function () {
//         // initialize an ongoing total
//         //totalDailyCookies = 0;
//         this.getCustomersPerHour(); // load up customer data
//         // lets load up our cookiesSoldPerHour by walking through each element in our average customers per hour array (number of customers * cookies sold per customer)
//         for (let index = 0; index < biznessHours.length; index++) {
//             // Calc number of cookies
//             let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
//             // Lets floor it so we get a whole number
//             this.cookiesSoldPerHour.push(dailyCookies); // multiply the 2 values shove as new element into cookies sold array          
//             // add to total
//             this.totalDailyCookies+=dailyCookies; //adding to the daily cookies
           
          
            
            
            
//         }
//         console.log(this.cookiesSoldPerHour); //code works!!
        
//     },
//    //3
//     render() {
//         this.getCookiesSoldPerHour(); //call a function
//         const unorderedList = document.getElementById('Dubai'); //grab Seattle in HTML
//         for (let i = 0; i < 15; i++) {
//             const listItem = document.createElement('li');
//             // 6am: 16 cookies
//             listItem.textContent = biznessHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
//             unorderedList.appendChild(listItem);
//         }
//         const listItem = document.createElement('li');
//         listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//         unorderedList.appendChild(listItem);
//     }
  
  
//   }
//   Dubai.render();
  
  
  
  
//   let Paris = {
    
//     minCustomers: 20,
//     maxCustomers: 38, 
//     avgCookieSale: 2.3, 
//     // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
//     customersPerHour: [], // need an array to store all the customer numbers per hour
//     cookiesSoldPerHour: [], 
//     totalDailyCookies : 0,
    
//     // methods
//    //1
//     getCustomersPerHour: function () {
//         //Use our random customer method. in same obj/instance so use 'this'
//         // add each random num of custs to our array where each index aligns with an hour in the day array
//         for (let index = 0; index < biznessHours.length; index++) {
//             // Add computed average customer value for each hour to our array/list
//             // the 'this' keyword... the props we using are in this class so we need 'this'
//             this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));// pass in min customers. pass in max customers.;  
//             //console.log(this.customersPerHour[index]);         
//         }
//         // lets see if we r even close. lets add some debug..... string literal
        
        
//     },
  
//     // now based on an average number of customers for a given hr, we need to us that value from array rando number along with data given for avg cookies per person and calcualte a guesstimate at number of cookies
//    //2
//     getCookiesSoldPerHour: function () {
//         // initialize an ongoing total
//         //totalDailyCookies = 0;
//         this.getCustomersPerHour(); // load up customer data
//         // lets load up our cookiesSoldPerHour by walking through each element in our average customers per hour array (number of customers * cookies sold per customer)
//         for (let index = 0; index < biznessHours.length; index++) {
//             // Calc number of cookies
//             let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
//             // Lets floor it so we get a whole number
//             this.cookiesSoldPerHour.push(dailyCookies); // multiply the 2 values shove as new element into cookies sold array          
//             // add to total
//             this.totalDailyCookies+=dailyCookies; //adding to the daily cookies
           
          
            
            
            
//         }
//         console.log(this.cookiesSoldPerHour); //code works!!
        
//     },
//    //3
//     render() {
//         this.getCookiesSoldPerHour(); //call a function
//         const unorderedList = document.getElementById('Paris'); //grab Seattle in HTML
//         for (let i = 0; i < 15; i++) {
//             const listItem = document.createElement('li');
//             // 6am: 16 cookies
//             listItem.textContent = biznessHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
//             unorderedList.appendChild(listItem);
//         }
//         const listItem = document.createElement('li');
//         listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//         unorderedList.appendChild(listItem);
//     }
  
  
//   }
//   Paris.render();
  
  
  
  
//   let Lima = {
    
//     minCustomers: 2,
//     maxCustomers: 16, 
//     avgCookieSale: 4.6, 
//     // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
//     customersPerHour: [], // need an array to store all the customer numbers per hour
//     cookiesSoldPerHour: [], 
//     totalDailyCookies : 0,
    
//     // methods
//    //1
//     getCustomersPerHour: function () {
//         //Use our random customer method. in same obj/instance so use 'this'
//         // add each random num of custs to our array where each index aligns with an hour in the day array
//         for (let index = 0; index < biznessHours.length; index++) {
//             // Add computed average customer value for each hour to our array/list
//             // the 'this' keyword... the props we using are in this class so we need 'this'
//             this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));// pass in min customers. pass in max customers.;  
//             //console.log(this.customersPerHour[index]);         
//         }
//         // lets see if we r even close. lets add some debug..... string literal
        
        
//     },
  
//     // now based on an average number of customers for a given hr, we need to us that value from array rando number along with data given for avg cookies per person and calcualte a guesstimate at number of cookies
//    //2
//     getCookiesSoldPerHour: function () {
//         // initialize an ongoing total
//         //totalDailyCookies = 0;
//         this.getCustomersPerHour(); // load up customer data
//         // lets load up our cookiesSoldPerHour by walking through each element in our average customers per hour array (number of customers * cookies sold per customer)
//         for (let index = 0; index < biznessHours.length; index++) {
//             // Calc number of cookies
//             let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
//             // Lets floor it so we get a whole number
//             this.cookiesSoldPerHour.push(dailyCookies); // multiply the 2 values shove as new element into cookies sold array          
//             // add to total
//             this.totalDailyCookies+=dailyCookies; //adding to the daily cookies
           
          
            
            
            
//         }
//         console.log(this.cookiesSoldPerHour); //code works!!
        
//     },
//    //3
//     render() {
//         this.getCookiesSoldPerHour(); //call a function
//         const unorderedList = document.getElementById('Lima'); //grab Seattle in HTML
//         for (let i = 0; i < 15; i++) {
//             const listItem = document.createElement('li');
//             // 6am: 16 cookies
//             listItem.textContent = biznessHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
//             unorderedList.appendChild(listItem);
//         }
//         const listItem = document.createElement('li');
//         listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//         unorderedList.appendChild(listItem);
//     }
  
  
//   }
//   Lima.render();





  
  
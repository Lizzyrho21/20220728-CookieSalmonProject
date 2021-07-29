//We want to find the total amount of customers and randomize it. We can use this function throughout our code.
function getRandomNumberOfCustomersGivenARange(minCustomers, maxCustomers) {
  return (
    Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers
  ); // if we get 0 we start at mincustomers, otherwise we multiply difference between max and min time 0 or 1 adding 1 because zero based
}

//set the business hours from the stakeholder info in a variable we can use again
const biznessHours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];

// first object 'Seattle'.
let Seattle = {
  locationName: "Seattle",
  minCustomers: 23, // ALL this info was given in instructions!
  maxCustomers: 65,
  avgCookieSale: 1,
  // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
  customersPerHour: [], // need an array to store all the customer numbers per hour
  cookiesSoldPerHour: [],
  totalDailyCookies: 0,

  // methods~

  // method 1- Get customer function with randomizer
  getCustomersPerHour: function () {
    const table = document.getElementById("cookieData");

    for (let index = 0; index < biznessHours.length; index++) {
      // Add computed average customer value for EACH HOUR to our array.
      // the 'this' keyword... the props we using are in this class so we need 'this'
      this.customersPerHour.push(
        getRandomNumberOfCustomersGivenARange(
          this.minCustomers,
          this.maxCustomers
        )
      ); // pass in min customers. pass in max customers.;
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
      let dailyCookies = Math.floor(
        this.customersPerHour[index] * this.avgCookieSale
      );
      // Lets floor it so we get a whole number
      this.cookiesSoldPerHour.push(dailyCookies); // multiply the 2 values shove as new element into cookies sold array
      // add to total
      this.totalDailyCookies += dailyCookies; //adding to the daily cookies
    }
  },

  locationTableData: [],

  getLocationTableData: function () {
    this.locationTableData.push(this.locationName);
    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.locationTableData.push(`${this.cookiesSoldPerHour[i]} cookies`);
    }
    this.locationTableData.push(this.totalDailyCookies);
  },

  render() {
    this.getCookiesSoldPerHour();
    this.getLocationTableData();
    let rowData = document.getElementById("cookieData");

    let dataLocation = rowData.insertRow();
    for (let i = 0; i < this.locationTableData.length; i++) {
      let dataCell = dataLocation.insertCell();
      dataCell.textcontent = this.locationTableData[i];
    }
  },
};
Seattle.render();
Seattle.getCookiesSoldPerHour();

console.log(Seattle.locationTableData);

let Tokyo = {
  locationName: "Tokyo",
  minCustomers: 3, // ALL this info was given in instructions!
  maxCustomers: 24,
  avgCookieSale: 1.2,
  // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
  customersPerHour: [], // need an array to store all the customer numbers per hour
  cookiesSoldPerHour: [],
  totalDailyCookies: 0,

  // methods~

  // method 1- Get customer function with randomizer
  getCustomersPerHour: function () {
    // const table = document.getElementById("cookieData");

    // const locationData = cookieData.insertRow();
    for (let index = 0; index < biznessHours.length; index++) {
      // Add computed average customer value for EACH HOUR to our array.
      // the 'this' keyword... the props we using are in this class so we need 'this'
      this.customersPerHour.push(
        getRandomNumberOfCustomersGivenARange(
          this.minCustomers,
          this.maxCustomers
        )
      ); // pass in min customers. pass in max customers.;
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
      let dailyCookies = Math.floor(
        this.customersPerHour[index] * this.avgCookieSale
      );
      // Lets floor it so we get a whole number
      this.cookiesSoldPerHour.push(dailyCookies); // multiply the 2 values shove as new element into cookies sold array
      // add to total
      this.totalDailyCookies += dailyCookies; //adding to the daily cookies
    }
    //console.log(this.cookiesSoldPerHour); //code works!!
  },

  locationTableData: [],

  getLocationTableData: function () {
    this.locationTableData.push(this.locationName);
    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.locationTableData.push(`${this.cookiesSoldPerHour[i]} cookies`);
    }
    this.locationTableData.push(this.totalDailyCookies);
  },

  render() {
    this.getCustomersPerHour();
    this.getLocationTableData();
    let rowData = document.getElementById("cookieData");

    let dataLocation = rowData.insertRow();
    for (let i = 0; i < this.locationTableData; i++) {
      let dataCell = dataLocation.insertCell();
      dataCell.textcontent = this.locationTableData[i];
      
    }
    console.log(Tokyo.locationTableData);
  },
};
Tokyo.render();


//Seattle.getCookiesSoldPerHour();

let Dubai = {
  locationName: "Dubai",
  minCustomers: 11, // ALL this info was given in instructions!
  maxCustomers: 38,
  avgCookieSale: 3.7,
  // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
  customersPerHour: [], // need an array to store all the customer numbers per hour
  cookiesSoldPerHour: [],
  totalDailyCookies: 0,

  // methods~

  // method 1- Get customer function with randomizer
  getCustomersPerHour: function () {
    const table = document.getElementById("cookieData");

    const locationData = cookieData.insertRow();
    for (let index = 0; index < biznessHours.length; index++) {
      // Add computed average customer value for EACH HOUR to our array.
      // the 'this' keyword... the props we using are in this class so we need 'this'
      this.customersPerHour.push(
        getRandomNumberOfCustomersGivenARange(
          this.minCustomers,
          this.maxCustomers
        )
      ); // pass in min customers. pass in max customers.;
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
      let dailyCookies = Math.floor(
        this.customersPerHour[index] * this.avgCookieSale
      );
      // Lets floor it so we get a whole number
      this.cookiesSoldPerHour.push(dailyCookies); // multiply the 2 values shove as new element into cookies sold array
      // add to total
      this.totalDailyCookies += dailyCookies; //adding to the daily cookies
    }
    console.log(this.cookiesSoldPerHour); //code works!!
  },

  locationTableData: [],

  getLocationTableData: function () {
    this.locationTableData.push(this.locationName);
    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.locationTableData.push(`${this.cookiesSoldPerHour[i]} cookies`);
    }
    this.locationTableData.push(this.totalDailyCookies);
  },

  render() {
    this.getCustomersPerHour();
    this.getLocationTableData();
    let rowData = document.getElementById("cookieData");

    let dataLocation = rowData.insertRow();
    for (let i = 0; i < this.locationTableData; i++) {
      let dataCell = dataLocation.insertCell();
      dataCell.textcontent = this.locationTableData[i];
    }
  },
};
Dubai.render();
//Seattle.getCookiesSoldPerHour();

let Paris = {
  locationName: "Paris",
  minCustomers: 20, // ALL this info was given in instructions!
  maxCustomers: 38,
  avgCookieSale: 2.3,
  // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
  customersPerHour: [], // need an array to store all the customer numbers per hour
  cookiesSoldPerHour: [],
  totalDailyCookies: 0,

  // methods~

  // method 1- Get customer function with randomizer
  getCustomersPerHour: function () {
    const table = document.getElementById("cookieData");

    const locationData = cookieData.insertRow();
    for (let index = 0; index < biznessHours.length; index++) {
      // Add computed average customer value for EACH HOUR to our array.
      // the 'this' keyword... the props we using are in this class so we need 'this'
      this.customersPerHour.push(
        getRandomNumberOfCustomersGivenARange(
          this.minCustomers,
          this.maxCustomers
        )
      ); // pass in min customers. pass in max customers.;
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
      let dailyCookies = Math.floor(
        this.customersPerHour[index] * this.avgCookieSale
      );
      // Lets floor it so we get a whole number
      this.cookiesSoldPerHour.push(dailyCookies); // multiply the 2 values shove as new element into cookies sold array
      // add to total
      this.totalDailyCookies += dailyCookies; //adding to the daily cookies
    }
    console.log(this.cookiesSoldPerHour); //code works!!
  },

  locationTableData: [],

  getLocationTableData: function () {
    this.locationTableData.push(this.locationName);
    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.locationTableData.push(`${this.cookiesSoldPerHour[i]} cookies`);
    }
    this.locationTableData.push(this.totalDailyCookies);
  },

  render() {
    this.getCustomersPerHour();
    this.getLocationTableData();
    let rowData = document.getElementById("cookieData");

    let dataLocation = rowData.insertRow();
    for (let i = 0; i < this.locationTableData; i++) {
      let dataCell = dataLocation.insertCell();
      dataCell.textcontent = this.locationTableData[i];
    }
  },
};
Paris.render();
// Seattle.getCookiesSoldPerHour();

let Lima = {
  locationName: "Lima",
  minCustomers: 2, // ALL this info was given in instructions!
  maxCustomers: 16,
  avgCookieSale: 2.6,
  // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
  customersPerHour: [], // need an array to store all the customer numbers per hour
  cookiesSoldPerHour: [],
  totalDailyCookies: 0,

  // methods~

  // method 1- Get customer function with randomizer
  getCustomersPerHour: function () {
    const table = document.getElementById("cookieData");

    const locationData = cookieData.insertRow();
    for (let index = 0; index < biznessHours.length; index++) {
      // Add computed average customer value for EACH HOUR to our array.
      // the 'this' keyword... the props we using are in this class so we need 'this'
      this.customersPerHour.push(
        getRandomNumberOfCustomersGivenARange(
          this.minCustomers,
          this.maxCustomers
        )
      ); // pass in min customers. pass in max customers.;
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
      let dailyCookies = Math.floor(
        this.customersPerHour[index] * this.avgCookieSale
      );
      // Lets floor it so we get a whole number
      this.cookiesSoldPerHour.push(dailyCookies); // multiply the 2 values shove as new element into cookies sold array
      // add to total
      this.totalDailyCookies += dailyCookies; //adding to the daily cookies
    }
    console.log(this.cookiesSoldPerHour); //code works!!
  },

  locationTableData: [],

  getLocationTableData: function () {
    this.locationTableData.push(this.locationName);
    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.locationTableData.push(`${this.cookiesSoldPerHour[i]} cookies`);
    }
    this.locationTableData.push(this.totalDailyCookies);
  },

  render() {
    this.getCustomersPerHour();
    this.getLocationTableData();
    let rowData = document.getElementById("cookieData");

    let dataLocation = rowData.insertRow();
    for (let i = 0; i < this.locationTableData; i++) {
      let dataCell = dataLocation.insertCell();
      dataCell.textcontent = this.locationTableData[i];
    }
  },
};
Lima.render();
console.log(Lima.getLocationTableData());





// Seattle.getCookiesSoldPerHour();

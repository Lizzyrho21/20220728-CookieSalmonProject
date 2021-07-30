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
const TableEl = document.getElementById("tabledatahtml");
var totalOfTotals = 0; 

function headerRender () {
    const seattleRowEl = document.createElement("tr");
    let seattleRowData = document.createElement("th");
    seattleRowData.textContent = "  ";
    seattleRowEl.appendChild(seattleRowData);

    
    for (let i = 0; i < biznessHours.length; i++) {
      
      // text content just makes text show up(Think of an alert with string concatenation!)
      seattleRowData = document.createElement("td");
      seattleRowData.textContent = biznessHours[i];
      seattleRowEl.appendChild(seattleRowData);
    }
    seattleRowData = document.createElement("td");
    seattleRowData.textContent = "Daily Location Total";
    seattleRowEl.appendChild(seattleRowData);
    TableEl.appendChild(seattleRowEl);
};



// Seattle.getCustomersPerHour();
//Seattle.getCookiesSoldPerHour();

headerRender();




// first object 'Seattle'.
let Seattle = {
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
    //Use our random customer method. in same obj/instance so use 'this'
    // aWe want to line our hour array from the loop with the customer per hour array
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
  //3 method..GET IT ALL TO SHOW UP ON HTML PAGE

  // declared a function..Could have been named anything we wanted!

  render() {
    const seattleRowEl = document.createElement("tr");
    let seattleRowData = document.createElement("td");
    seattleRowData.textContent = "Seattle";
    seattleRowEl.appendChild(seattleRowData);

    this.getCookiesSoldPerHour(); //call a function
    //Declared a variable ane named it the elemetn we will be putting it in.

    //This is how we pull the hours!
    for (let i = 0; i < biznessHours.length; i++) {
      //declared another variable we will be putting in HTML

      // text content just makes text show up(Think of an alert with string concatenation!)
      seattleRowData = document.createElement("td");
      seattleRowData.textContent = this.cookiesSoldPerHour[i];
      seattleRowEl.appendChild(seattleRowData);
    }
    seattleRowData = document.createElement("td");
    seattleRowData.textContent = this.totalDailyCookies;
    seattleRowEl.appendChild(seattleRowData);
    TableEl.appendChild(seattleRowEl);

    //   const totalCookieRowData = document.createElement('td');
    //   totalCookieRowData.textContent = (Seattle.totalDailyCookies);
    //   getTableEl.appendChild(totalCookieRowData);
  },
};


Seattle.render();


 let Tokyo = {

  minCustomers: 3,
  maxCustomers: 24,
  avgCookieSale: 1.2,
  // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
  customersPerHour: [], // need an array to store all the customer numbers per hour
  cookiesSoldPerHour: [],
  totalDailyCookies : 0,

  // methods
 //1
  getCustomersPerHour: function () {
      //Use our random customer method. in same obj/instance so use 'this'
      // add each random num of custs to our array where each index aligns with an hour in the day array
      for (let index = 0; index < biznessHours.length; index++) {
          // Add computed average customer value for each hour to our array/list
          // the 'this' keyword... the props we using are in this class so we need 'this'
          this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));// pass in min customers. pass in max customers.;
          //console.log(this.customersPerHour[index]);
      }
      // lets see if we r even close. lets add some debug..... string literal

  },

  // now based on an average number of customers for a given hr, we need to us that value from array rando number along with data given for avg cookies per person and calcualte a guesstimate at number of cookies
 //2
  getCookiesSoldPerHour: function () {
      // initialize an ongoing total
      //totalDailyCookies = 0;
      this.getCustomersPerHour(); // load up customer data
      // lets load up our cookiesSoldPerHour by walking through each element in our average customers per hour array (number of customers * cookies sold per customer)
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

  render() {
    const tokyoRowEl = document.createElement("tr");
    let tokyoRowData = document.createElement("td");
    tokyoRowData.textContent = "Tokyo";
    tokyoRowEl.appendChild(tokyoRowData);

    this.getCookiesSoldPerHour(); //call a function
    //Declared a variable ane named it the elemetn we will be putting it in.

    //This is how we pull the hours!
    for (let i = 0; i < biznessHours.length; i++) {
      //declared another variable we will be putting in HTML

      // text content just makes text show up(Think of an alert with string concatenation!)
      tokyoRowData = document.createElement("td");
      tokyoRowData.textContent = this.cookiesSoldPerHour[i];
      tokyoRowEl.appendChild(tokyoRowData);
    }
    tokyoRowData = document.createElement("td");
    tokyoRowData.textContent = this.totalDailyCookies;
    tokyoRowEl.appendChild(tokyoRowData);
    TableEl.appendChild(tokyoRowEl);

    //   const totalCookieRowData = document.createElement('td');
    //   totalCookieRowData.textContent = (Seattle.totalDailyCookies);
    //   getTableEl.appendChild(totalCookieRowData);
  },
};
 //3
  



Tokyo.render();

let Dubai = {

  minCustomers: 11,
  maxCustomers: 38,
  avgCookieSale: 3.7,
  // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
  customersPerHour: [], // need an array to store all the customer numbers per hour
  cookiesSoldPerHour: [],
  totalDailyCookies : 0,

  // methods
 //1
  getCustomersPerHour: function () {
      //Use our random customer method. in same obj/instance so use 'this'
      // add each random num of custs to our array where each index aligns with an hour in the day array
      for (let index = 0; index < biznessHours.length; index++) {
          // Add computed average customer value for each hour to our array/list
          // the 'this' keyword... the props we using are in this class so we need 'this'
          this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));// pass in min customers. pass in max customers.;
          //console.log(this.customersPerHour[index]);
      }
      // lets see if we r even close. lets add some debug..... string literal

  },

  // now based on an average number of customers for a given hr, we need to us that value from array rando number along with data given for avg cookies per person and calcualte a guesstimate at number of cookies
 //2
  getCookiesSoldPerHour: function () {
      // initialize an ongoing total
      //totalDailyCookies = 0;
      this.getCustomersPerHour(); // load up customer data
      // lets load up our cookiesSoldPerHour by walking through each element in our average customers per hour array (number of customers * cookies sold per customer)
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
 //3
 render() {
    const dubaiRowEl = document.createElement("tr");
    let dubaiRowData = document.createElement("td");
    dubaiRowData.textContent = "Dubai";
    dubaiRowEl.appendChild(dubaiRowData);

    this.getCookiesSoldPerHour(); //call a function
    //Declared a variable ane named it the elemetn we will be putting it in.

    //This is how we pull the hours!
    for (let i = 0; i < biznessHours.length; i++) {
      //declared another variable we will be putting in HTML

      // text content just makes text show up(Think of an alert with string concatenation!)
      dubaiRowData = document.createElement("td");
      dubaiRowData.textContent = this.cookiesSoldPerHour[i];
      dubaiRowEl.appendChild(dubaiRowData);
    }
    dubaiRowData = document.createElement("td");
    dubaiRowData.textContent = this.totalDailyCookies;
    dubaiRowEl.appendChild(dubaiRowData);
    TableEl.appendChild(dubaiRowEl);

},

};
Dubai.render();

let Paris = {

  minCustomers: 20,
  maxCustomers: 38,
  avgCookieSale: 2.3,
  // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
  customersPerHour: [], // need an array to store all the customer numbers per hour
  cookiesSoldPerHour: [],
  totalDailyCookies : 0,

  // methods
 //1
  getCustomersPerHour: function () {
      //Use our random customer method. in same obj/instance so use 'this'
      // add each random num of custs to our array where each index aligns with an hour in the day array
      for (let index = 0; index < biznessHours.length; index++) {
          // Add computed average customer value for each hour to our array/list
          // the 'this' keyword... the props we using are in this class so we need 'this'
          this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));// pass in min customers. pass in max customers.;
          //console.log(this.customersPerHour[index]);
      }
      // lets see if we r even close. lets add some debug..... string literal

  },

  // now based on an average number of customers for a given hr, we need to us that value from array rando number along with data given for avg cookies per person and calcualte a guesstimate at number of cookies
 //2
  getCookiesSoldPerHour: function () {
      // initialize an ongoing total
      //totalDailyCookies = 0;
      this.getCustomersPerHour(); // load up customer data
      // lets load up our cookiesSoldPerHour by walking through each element in our average customers per hour array (number of customers * cookies sold per customer)
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
 //3

 render() {
    const parisRowEl = document.createElement("tr");
    let parisRowData = document.createElement("td");
    parisRowData.textContent = "Paris";
    parisRowEl.appendChild(parisRowData);

    this.getCookiesSoldPerHour(); //call a function
    //Declared a variable ane named it the elemetn we will be putting it in.

    //This is how we pull the hours!
    for (let i = 0; i < biznessHours.length; i++) {
      //declared another variable we will be putting in HTML

      // text content just makes text show up(Think of an alert with string concatenation!)
      parisRowData = document.createElement("td");
      parisRowData.textContent = this.cookiesSoldPerHour[i];
      parisRowEl.appendChild(parisRowData);
    }
    parisRowData = document.createElement("td");
    parisRowData.textContent = this.totalDailyCookies;
    parisRowEl.appendChild(parisRowData);
    TableEl.appendChild(parisRowEl);

  

}
};

Paris.render();

let Lima = {

  minCustomers: 2,
  maxCustomers: 16,
  avgCookieSale: 4.6,
  // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
  customersPerHour: [], // need an array to store all the customer numbers per hour
  cookiesSoldPerHour: [],
  totalDailyCookies : 0,

  // methods
 //1
  getCustomersPerHour: function () {
      //Use our random customer method. in same obj/instance so use 'this'
      // add each random num of custs to our array where each index aligns with an hour in the day array
      for (let index = 0; index < biznessHours.length; index++) {
          // Add computed average customer value for each hour to our array/list
          // the 'this' keyword... the props we using are in this class so we need 'this'
          this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));// pass in min customers. pass in max customers.;
          //console.log(this.customersPerHour[index]);
      }
      // lets see if we r even close. lets add some debug..... string literal

  },

  // now based on an average number of customers for a given hr, we need to us that value from array rando number along with data given for avg cookies per person and calcualte a guesstimate at number of cookies
 //2
  getCookiesSoldPerHour: function () {
      // initialize an ongoing total
      //totalDailyCookies = 0;
      this.getCustomersPerHour(); // load up customer data
      // lets load up our cookiesSoldPerHour by walking through each element in our average customers per hour array (number of customers * cookies sold per customer)
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
 //3
 render() {
    const limaRowEl = document.createElement("tr");
    let limaRowData = document.createElement("td");
    limaRowData.textContent = "Lima";
    limaRowEl.appendChild(limaRowData);

    this.getCookiesSoldPerHour(); //call a function
    //Declared a variable ane named it the elemetn we will be putting it in.

    //This is how we pull the hours!
    for (let i = 0; i < biznessHours.length; i++) {
      //declared another variable we will be putting in HTML

      // text content just makes text show up(Think of an alert with string concatenation!)
      limaRowData = document.createElement("td");
      limaRowData.textContent = this.cookiesSoldPerHour[i];
      limaRowEl.appendChild(limaRowData);
    }
    limaRowData = document.createElement("td");
    limaRowData.textContent = this.totalDailyCookies;
    limaRowEl.appendChild(limaRowData);
    TableEl.appendChild(limaRowEl);


}
};

Lima.render();



locationArray = [Seattle, Tokyo, Dubai, Paris, Lima];
    function makeFooterRow() {
  const tableRow = document.createElement('tr');
  let tableHeader = document.createElement('th');
  tableHeader.textContent = 'Hourly Totals for All Locations';
  tableRow.appendChild(tableHeader);
  let grandTotal = 0;
  for (let i = 0; i < biznessHours.length; i++) {
    let hourlyTotal = 0;
    for (let index = 0; index < locationArray.length; index++){
      hourlyTotal += locationArray[index].cookiesSoldPerHour[i];
    totalOfTotals += grandTotal;
    }
    tableHeader = document.createElement('th');
    tableHeader.textContent = hourlyTotal;
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement('th');
  tableHeader.textContent = totalOfTotals;
  tableRow.appendChild(tableHeader);
  TableEl.appendChild(tableRow);
}

this.makeFooterRow();
  



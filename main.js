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

function CityLocations(
  locationName,
  minCustomers,
  maxCustomers,
  avgCookieSale
) {
  // assigned our parameters to value properties
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieSale = avgCookieSale;
  //now we have to address the values that will be changed in our running code
  this.customersPerHour = [];
  this.cookiesSoldPerHour = [];
  this.totalDailyCookies = 0;
}

// ====================== our methods using the .prototype  =============================//

CityLocations.prototype.getCustomersPerHour = function () {
  //We declare our loop for the business hours
  for (let i = 0; i < biznessHours.length; i++) {
    // block of code set to run-- the function 'getRandomnumberOfCustomersGivenARange' pushing into 'customers per hour' for each hour!!
    this.customersPerHour.push(
      getRandomNumberOfCustomersGivenARange(
        this.minCustomers,
        this.maxCustomers
      )
    );
  }
};

CityLocations.prototype.getCookiesSoldPerHour = function () {
  //Here, we call our previous function to help with the construction!
  this.getCustomersPerHour();
  for (let i = 0; i < biznessHours.length; i++) {
    //code block that will run will get the answer for one hour and loop through the hours!!
    const oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookieSale);
    this.cookiesSoldPerHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
};

CityLocations.prototype.render = function () {
  // This function is called. we  are working on the data row!
  this.getCookiesSoldPerHour();
  const tableRow = document.createElement("tr");
  let tableDataEl = document.createElement("td");
  tableDataEl.textContent = this.locationName;
  console.log(this.locationName);
  tableRow.appendChild(tableDataEl);

  //pull the hours
  for (let i = 0; i < biznessHours.length; i++) {
    //code we want to run

    tableDataEl = document.createElement("td");
    tableDataEl.textContent = this.cookiesSoldPerHour[i];
    tableRow.appendChild(tableDataEl);
  }
  tableRow.append(this.totalDailyCookies);
  TableEl.appendChild(tableRow);
};
const storeLocations = [];

let location1 = new CityLocations("Seattle", 23, 65, 2.3);
storeLocations.push(location1);
let location2 = new CityLocations("Tokyo", 3, 24, 1.2);
storeLocations.push(location2);
let location3 = new CityLocations("Dubai", 11, 38, 3.7);
storeLocations.push(location3);
let location4 = new CityLocations("Paris", 20, 38, 2.3);
storeLocations.push(location4);
let location5 = new CityLocations("Lima", 2, 16, 4.6);
storeLocations.push(location5);

function headerRender() {
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
}

// Seattle.getCustomersPerHour();
//Seattle.getCookiesSoldPerHour();

headerRender();
for (i = 0; i < storeLocations.length; i++) {  
  storeLocations[i].render();
}
makeFooterRow();



function addLocation(evt) {
  evt.preventDefault(); // prevent the default stuff from happening
  let rows = document.getElementsByTagName("tr"); //html element name 
  console.log("rowCount " + rows.length);
  TableEl.deleteRow(rows.length - 1);
  let city = evt.target.cityname.value;
  let minCustomers = evt.target.mincustomers.value;
  let maxCustomers = evt.target.maxcustomers.value;
  let avgCookies = evt.target.avgcookies.value;
  let userLocation = new CityLocations(
    city,
    minCustomers,
    maxCustomers,
    avgCookies
  );

  storeLocations.push(userLocation);
  userLocation.render();
  makeFooterRow();

  // do with values (eg. add to array)
  console.log(`${city} ${minCustomers}`);
}

let cityForm = document.getElementById("cityForm");
// attach listener on submit button
cityForm.addEventListener("submit", addLocation);

function makeFooterRow() {
  const footerRow = document.createElement("tr");
  let footerHeader = document.createElement("td");
  footerHeader.textContent = "Hourly Totals";
  footerRow.appendChild(footerHeader);
  let grandTotal = 0;
  for (let i = 0; i < biznessHours.length; i++) {
    let hourlyTotal = 0;
    for (let index = 0; index < storeLocations.length; index++) {
      hourlyTotal += storeLocations[index].cookiesSoldPerHour[i];
      grandTotal += storeLocations[index].cookiesSoldPerHour[i];

      console.log(storeLocations[index]);
    }

    footerHeader = document.createElement("th");
    footerHeader.textContent = hourlyTotal;
    footerRow.appendChild(footerHeader);
  }
  footerHeader = document.createElement("th");
  footerHeader.textContent = grandTotal;
  footerRow.appendChild(footerHeader);
  TableEl.appendChild(footerRow);
}

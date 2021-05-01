const key = 'pk.eyJ1IjoicHduZWlsbCIsImEiOiJja2R6N3JhYzkzazZwMnJxcXB0Y3V0NHQ5In0.IU5S18FiNleGSzGcIOxZWA'

const locationData = [{
          "id": 1,
          "name": "Heartland Alliance - Uptown",
          "desc": "Heartland Alliance Health Centers mental health services include: counseling for individuals and groups, addiction services, trauma and post-trauma counseling, and in-network provider referrals.",
          "lat": 41.96896,
          "lng": -87.65541,
          "hours":"8:00am - 5:00pm",
          "addr1": "1015 W Lawrence Ave",
          "addr2": "Chicago IL 60640",
          "phone": "(773) 275-2586",
          "web": "https://www.heartlandalliance.org/",
          "waitTime": "one week",
          "telehealth": true,
          "languages": ["Spanish"],
          "financialAssistance": "Yes, they offer income-based repayment",
          "ageRestrictions": false,
          "appointment": true,
          "medicaid": true,
          "LGBT": true,
        },{
            "id": 2,
            "name": "Heartland Alliance - James West",
            "desc": "Heartland Alliance Health Centers mental health services include: counseling for individuals and groups, addiction services, trauma and post-trauma counseling, and in-network provider referrals.",
            "lat": 41.883220,
            "lng": -87.651100,
            "hours":"8:00am - 5:00pm",
            "addr1": "932 W Washington Blvd #224",
            "addr2": "Chicago IL 60607",
            "phone": "(773) 275-2586",
            "web": "https://www.heartlandalliance.org/",
            "waitTime": "one week",
            "telehealth": true,
            "languages": ["Spanish"],
            "financialAssistance": "Yes, they offer income-based repayment",
            "ageRestrictions": false,
            "appointment": true,
            "medicaid": true,
            "LGBT": true,
          },{
            "id": 3,
            "name": "Heartland Alliance - Englewood",
            "desc": "Heartland Alliance Health Centers mental health services include: counseling for individuals and groups, addiction services, trauma and post-trauma counseling, and in-network provider referrals.",
            "lat": 41.793530,
            "lng": -87.644720,
            "hours":"8:30am - 5:00pm",
            "waitTime": "one week",
            "addr1": "5501 S Haldstead St",
            "addr2": "Chicago IL 60621",
            "phone": "(773) 275-2586",
            "web": "https://www.heartlandalliance.org/",
            "telehealth": true,
            "languages": ["Spanish"],
            "financialAssistance": "Yes, they offer income-based repayment",
            "ageRestrictions": false,
            "appointment": true,
            "medicaid": true,
            "LGBT": true,
          },{
            "id": 4,
            "name": "Children's Home & Aid",
            "desc": "Children's Home and Aid provides a variety of different mental health services. The Behavioral Health Services program provides school based, office based and community-based services to children and youth ages 4-21 and their families on the west and south sides of Chicago. Program staff members are sensitive to all cultural values, sexual orientations, and gender identities.",
            "lat": 41.881760,
            "lng": -87.637090,
            "hours": "9:00 AM to 5:00 PM, Monday to Friday",
            "addr1": "125 South Wacker Drive, 14th Floor",
            "addr2": "Chicago IL 60606",
            "phone": "(773) 275-2586",
            "waitTime": "one week",
            "web": "https://childrenshomeandaid.org/",
            "telehealth": false,
            "languages": ["Spanish"],
            "financialAssistance": "Yes, they offer income-based repayment for patients with Medicaid",
            "ageRestrictions": "4-21",
            "appointment": true,
            "medicaid": true,
            "LGBT": true,
          },{
            "id": 5,
            "name": "Alternatives, Inc.",
            "desc": "Alternatives, Inc. provides services to youth (0-18) with short-and long-term therapy and case management, emphasizing family communication, conflict resolution, discipline, and life-skills development. Individual, family, and group services are offered through school-based health centers, and within our Youth Center to support youth experiencing a range of issues, including family conflict, substance abuse, peer relationships, identity issues, anger management, and behavioral/emotional challenges.",
            "hours": "8:30am-5:00pm",
            "lat": 41.968350,
            "lng": -87.654980,
            "waitTime": "varies",
            "addr1": "4730 North Sheridan Road",
            "addr2": "Chicago, IL 60640",
            "phone": "(773) 506--7474",
            "web": "alternativesyouth.org/contact/",
            "telehealth": false,
            "languages": ["Spanish"],
            "financialAssistance": "Yes, they offer income-based repayment",
            "ageRestrictions": "available to youth up to 18 years old",
            "appointment": true,
            "medicaid": true,
            "LGBT": true,
          },{
            "id": 6,
            "name": "Metropolitan Family Services - South Side (Calumet Center)",
            "desc": "Short and long term counseling services available to adults, children, and families. Metropolitan Family services focuses on Adult Mental Health, Children and Adolescent Mental Health, and Senior Counseling. In addition to counseling, they also have in-home respite, adult protective services, and support for caregivers, homeowners, and grandparents raising grandchildren.",
            "lat": 41.707220,
            "lng": -87.617400,
            "hours": "8:30am-5:00pm",
            "waitTime": "1-2 Weeks",
            "addr1": "235 E 103rd St",
            "addr2": "Chicago, IL 60628",
            "phone": "(773) 506-7474",
            "web": "metrofamily.org/contact-us/",
            "telehealth": false,
            "languages": ["Spanish"],
            "financialAssistance": "Yes, they offer income-based repayment",
            "ageRestrictions": false,
            "appointment": true,
            "medicaid": true,
            "LGBT": true,
          },{
            "id": 7,
            "name": "Metropolitan Family Services - Midway",
            "desc": "Short and long term counseling services available to adults, children, and families. Metropolitan Family services focuses on Adult Mental Health, Children and Adolescent Mental Health, and Senior Counseling. In addition to counseling, they also have in-home respite, adult protective services, and support for caregivers, homeowners, and grandparents raising grandchildren.",
            "lat": 41.778330,
            "lng": -87.719460,
            "hours": "8:30am-5:00pm",
            "waitTime": "1-2 Weeks",
            "addr1": "3843 West 63rd Street",
            "addr2": "Chicago, IL 60628",
            "phone": "(773) 884-3310",
            "web": "metrofamily.org/contact-us/",
            "telehealth": false,
            "languages": ["Spanish"],
            "financialAssistance": false,
            "ageRestrictions": "available to youth up to 18 years old",
            "appointment": true,
            "medicaid": true,
            "LGBT": true,
          },{
            "id": 8,
            "name": "Metropolitan Family Services - Southeast Chicago",
            "desc": "Short and long term counseling services available to adults, children, and families. Metropolitan Family services focuses on Adult Mental Health, Children and Adolescent Mental Health, and Senior Counseling. In addition to counseling, they also have in-home respite, adult protective services, and support for caregivers, homeowners, and grandparents raising grandchildren.",
            "lat": 41.730440,
            "lng": -87.548870,
            "hours": "8:30am-5:00pm",
            "waitTime": "1-2 Weeks",
            "addr1": "3062 East 91st Street",
            "addr2": "Chicago, IL 60617",
            "phone": "(773) 371-2900",
            "web": "metrofamily.org/contact-us/",
            "telehealth": false,
            "languages": ["Spanish"],
            "financialAssistance": "Yes, they offer income-based repayment",
            "ageRestrictions": false,
            "appointment": true,
            "medicaid": true,
            "LGBT": true,
          },{
            "id": 9,
            "name": "Metropolitan Family Services - Northside",
            "desc": "Short and long term counseling services available to adults, children, and families. Metropolitan Family services focuses on Adult Mental Health, Children and Adolescent Mental Health, and Senior Counseling. In addition to counseling, they also have in-home respite, adult protective services, and support for caregivers, homeowners, and grandparents raising grandchildren.",
            "hours": "8:30am-5:00pm",
            "lat": 41.940150,
            "lng": -87.766160,
            "waitTime": "1-2 Weeks",
            "addr1": "3249 North Central Ave",
            "addr2": "Chicago, IL 60634",
            "phone": "(773) 371-3700",
            "web": "metrofamily.org/contact-us/",
            "telehealth": false,
            "languages": ["Spanish"],
            "financialAssistance": "Yes, they offer income-based repayment",
            "ageRestrictions": false,
            "appointment": true,
            "medicaid": true,
            "LGBT": true,
          },{
            "id": 10,
            "name": "Metropolitan Family Services - DuPage",
            "desc": "Short and long term counseling services available to adults, children, and families. Metropolitan Family services focuses on Adult Mental Health, Children and Adolescent Mental Health, and Senior Counseling. In addition to counseling, they also have in-home respite, adult protective services, and support for caregivers, homeowners, and grandparents raising grandchildren.",
            "hours": "8:30am-5:00pm",
            "lat": 41.862940,
            "lng": -88.103820,
            "waitTime": "1-2 Weeks",
            "addr1": "222 East Willow Ave",
            "addr2": "Wheaton, IL 60187",
            "phone": "(630) 784-4800",
            "web": "metrofamily.org/contact-us/",
            "telehealth": false,
            "languages": ["Spanish"],
            "financialAssistance": "Yes, they offer income-based repayment",
            "ageRestrictions": false,
            "appointment": true,
            "medicaid": true,
            "LGBT": true,
          },{
            "id": 11,
            "name": "Metropolitan Family Services - Southwest Suburbs",
            "desc": "Short and long term counseling services available to adults, children, and families. Metropolitan Family services focuses on Adult Mental Health, Children and Adolescent Mental Health, and Senior Counseling. In addition to counseling, they also have in-home respite, adult protective services, and support for caregivers, homeowners, and grandparents raising grandchildren.",
            "hours": "8:30am-5:00pm",
            "lat": 41.654300,
            "lng": -87.680420,
            "waitTime": "1-2 Weeks",
            "addr1": "13136 Western Ave",
            "addr2": "Blue Island, IL 60406",
            "phone": "(708) 974-2300",
            "web": "metrofamily.org/contact-us/",
            "telehealth": false,
            "languages": ["Spanish"],
            "financialAssistance": "Yes, they offer income-based repayment",
            "ageRestrictions": false,
            "appointment": true,
            "medicaid": true,
            "LGBT": true,
          },{
            "id": 12,
            "name": "Metropolitan Family Services - Palos Hills",
            "desc": "Short and long term counseling services available to adults, children, and families. Metropolitan Family services focuses on Adult Mental Health, Children and Adolescent Mental Health, and Senior Counseling. In addition to counseling, they also have in-home respite, adult protective services, and support for caregivers, homeowners, and grandparents raising grandchildren.",
            "hours": "8:30am-5:00pm",
            "lat": 41.698990,
            "lng": -87.815770,
            "waitTime": "1-2 Weeks",
            "addr1": "10537 South Roberts Rd",
            "addr2": "Palos Hills, IL 60465",
            "phone": "(708) 974-2300",
            "web": "metrofamily.org/contact-us/",
            "telehealth": false,
            "languages": ["Spanish"],
            "financialAssistance": "Yes, they offer income-based repayment",
            "ageRestrictions": false,
            "appointment": true,
            "medicaid": true,
            "LGBT": true,
          },{
            "id": 13,
            "name": "Thresholds",
            "desc": "Thresholds provides clinical services for people with severe mental illness (must be already diagnosed/assessed and on Medicaid). This includes case management, psychiatric care, group and individual therapy, as well as the evidence-based practices of Wellness Management and Recovery and Integrated Dual Disorders Treatment.",
            "hours": "9:00am-5:00pm",
            "lat": 41.956340,
            "lng": -87.673690,
            "waitTime": "3-4 Weeks",
            "addr1": "4101 N Ravenswood Ave",
            "addr2": "Chicago, IL 60613",
            "phone": "(773) 572-5500",
            "web": "thresholds.org",
            "telehealth": true,
            "languages": ["Spanish"],
            "financialAssistance": "Medicaid Only",
            "ageRestrictions": "young adults aged 16-20",
            "appointment": true,
            "medicaid": true,
            "LGBT": true,
          },]

var markerIcon = L.Icon.extend({ 
    options: {
        customId: ""
    }
})

var mymap = L.map('mapid').setView([41.761944, -87.327778], 9.7);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: key
}).addTo(mymap);

var sidebar = L.control.sidebar('sidebar', {
    position: 'left'
});

mymap.addControl(sidebar);

locationData.forEach(loc => {

    L.marker([loc.lat, loc.lng], {customId: loc.id}).addTo(mymap).on('click', function () {
        console.log(this.options.customId)

        let location = locationData[this.options.customId]
        let html = generateContent(location)
        sidebar.setContent(html);

        sidebar.toggle();
    });
})

function generateContent(loc) {
    return `
    <div>
    <h1 id="sidebar-name">${loc.name}</h1>
    <p id="sidebar-desc">${loc.desc}</p>
    <p id="sidebar-desc"><b>Address: </br>${loc.addr1}<br/>${loc.addr2}</p>
    <p id="sidebar-hours"><b>Hours: </b>${loc.hours}</p>
    <p id="sidebar-wait"><b>Average wait time: </b>${loc.waitTime}</p>
    <p id="sidebar-phone">${loc.phone}</p>
    <p id="sidebar-desc"><a href=${loc.web}>${loc.web}</a></p>    
    <p id="sidebar-telehealth"><br>Does this location offer telehealth services? </b>${loc.telehealth}</p>
    <p id="sidebar-lang><b>Languages Served: </b>${loc.languages}
    <p id="sidebar-financing"><b>Does this location offer financial assistance? </b>${loc.financialAssistance}</p>
    <p id="sidebar-ages"><b>Are there any age limits? </b>${loc.ageRestrictions}</p>
    <p id="sidebar-appointment"><b>Do you need an appointment? </b>${loc.appointment}</p>
    <p id="sidebar-medicaid"><b>Do they take Medicaid? </b>${loc.ageRestrictions}</p>
    <p id="sidebar-medicaid"><b>Are they LGBT friendly?  </b>${loc.LGBT}</p>

    </div>
    `
}
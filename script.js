const key =
  "pk.eyJ1IjoicHduZWlsbCIsImEiOiJja2R6N3JhYzkzazZwMnJxcXB0Y3V0NHQ5In0.IU5S18FiNleGSzGcIOxZWA";

const locationData = [
  {
    id: 1,
    name: "Heartland Alliance - Uptown",
    desc: "Heartland Alliance Health Centers mental health services include: counseling for individuals and groups, addiction services, trauma and post-trauma counseling, and in-network provider referrals.",
    lat: 41.96906,
    lng: -87.65707,
    hours: "8:00am - 5:00pm",
    addr1: "1015 W Lawrence Ave",
    addr2: "Chicago IL 60640",
    phone: "(773) 275-2586",
    web: "https://www.heartlandalliance.org/",
    waitTime: "one week",
    telehealth: "yes",
    languages: "Spanish",
    financialAssistance:
      "Yes, they have a sliding scale, which means your payments are based on factors such as your income.",
    ageRestrictions: "no",
    appointment: "yes",
    medicaid: "yes",
    LGBT: "yes",
  },
  {
    id: 2,
    name: "Heartland Alliance - James West",
    desc: "Heartland Alliance Health Centers mental health services include: counseling for individuals and groups, addiction services, trauma and post-trauma counseling, and in-network provider referrals.",
    lat: 41.88355,
    lng: -87.65127,
    hours: "8:00am - 5:00pm",
    addr1: "932 W Washington Blvd #224",
    addr2: "Chicago IL 60607",
    phone: "(773) 275-2586",
    web: "https://www.heartlandalliance.org/",
    waitTime: "one week",
    telehealth: "yes",
    languages: "Spanish",
    financialAssistance:
      "Yes, they have a sliding scale, which means your payments are based on factors such as your income.",
    ageRestrictions: "no",
    appointment: "yes",
    medicaid: "yes",
    LGBT: "yes",
  },
  {
    id: 3,
    name: "Heartland Alliance - Englewood",
    desc: "Heartland Alliance Health Centers mental health services include: counseling for individuals and groups, addiction services, trauma and post-trauma counseling, and in-network provider referrals.",
    lat: 41.79375,
    lng: -87.6448,
    hours: "8:30am - 5:00pm",
    addr1: "5501 S Haldsted St",
    addr2: "Chicago IL 60621",
    phone: "(773) 275-2586",
    web: "https://www.heartlandalliance.org/",
    waitTime: "one week",
    telehealth: "yes",
    languages: "Spanish",
    financialAssistance:
      "Yes, they have a sliding scale, which means your payments are based on factors such as your income.",
    ageRestrictions: "no",
    appointment: "yes",
    medicaid: "yes",
    LGBT: "yes",
  },
  {
    id: 4,
    name: "Children's Home & Aid",
    desc: "Children's Home and Aid provides a variety of different mental health services. The Behavioral Health Services program provides school based, office based and community-based services to children and youth ages 4-21 and their families on the west and south sides of Chicago. Program staff members are sensitive to all cultural values, sexual orientations, and gender identities.",
    lat: 41.87972,
    lng: -87.63641,
    hours: "8:30am - 4:30pm",
    addr1: "125 South Wacker Drive, 14th Floor",
    addr2: "Chicago IL 60606",
    phone: "(773) 969-5524",
    waitTime: "one week",
    web: "https://childrenshomeandaid.org/",
    telehealth: "no",
    languages: "Spanish",
    financialAssistance:
      "Yes, they have a sliding scale, which means your payments are based on factors such as your income (Must have medicaid).",
    ageRestrictions: "4-21",
    appointment: "You need to schedule an appointment.",
    medicaid: "yes",
    LGBT: "yes",
  },
  {
    id: 5,
    name: "Alternatives, Inc.",
    desc: "Alternatives, Inc. provides services to youth (0-18) with short-and long-term therapy and case management, emphasizing family communication, conflict resolution, discipline, and life-skills development. Individual, family, and group services are offered through school-based health centers, and within our Youth Center to support youth experiencing a range of issues, including family conflict, substance abuse, peer relationships, identity issues, anger management, and behavioral/emotional challenges.",
    hours: "8:30am-5:00pm",
    lat: 41.9655,
    lng: -87.6548,
    waitTime: "varies",
    addr1: "4730 North Sheridan Road",
    addr2: "Chicago, IL 60640",
    phone: "(773) 506--7474",
    web: "alternativesyouth.org/contact/",
    telehealth: "no",
    languages: "Spanish",
    financialAssistance:
      "Yes, they have a sliding scale, which means your payments are based on factors such as your income.",
    ageRestrictions: "Services are offered to youth 12 to 24 years old.",
    appointment:
      "Services are by appointment. If you walk in they can help you schedule an appointment for a later time.",
    medicaid: "yes",
    LGBT: "yes",
  },
  {
    id: 6,
    name: "Metropolitan Family Services - South Side (Calumet Center)",
    desc: "Short and long term counseling services available to adults, children, and families. Metropolitan Family services focuses on Adult Mental Health, Children and Adolescent Mental Health, and Senior Counseling. In addition to counseling, they also have in-home respite, adult protective services, and support for caregivers, homeowners, and grandparents raising grandchildren.",
    lat: 41.7070097,
    lng: -87.6188982,
    hours: "8:30am-5:00pm",
    waitTime: "1-2 Weeks",
    addr1: "235 E 103rd St",
    addr2: "Chicago, IL 60628",
    phone: "(773) 884-3310",
    web: "metrofamily.org/contact-us/",
    telehealth: "no",
    languages: "Spanish",
    financialAssistance:
      "There may be a sliding scale depending on the location and whether you have a referral",
    ageRestrictions: "No. All ages are welcome, including families.",
    appointment: "You need to schedule an appointment.",
    medicaid: "yes",
    LGBT: "yes",
  },
  {
    id: 7,
    name: "Metropolitan Family Services - Midway",
    desc: "Short and long term counseling services available to adults, children, and families. Metropolitan Family services focuses on Adult Mental Health, Children and Adolescent Mental Health, and Senior Counseling. In addition to counseling, they also have in-home respite, adult protective services, and support for caregivers, homeowners, and grandparents raising grandchildren.",
    lat: 41.77845,
    lng: -87.71943,
    hours: "8:30am-5:00pm",
    waitTime: "1-2 Weeks",
    addr1: "3843 West 63rd Street",
    addr2: "Chicago, IL 60628",
    phone: "(773) 884-3310",
    web: "metrofamily.org/contact-us/",
    telehealth: "no",
    languages: "Spanish",
    financialAssistance:
      "There may be a sliding scale depending on the location and whether you have a referral",
    ageRestrictions: "No. All ages are welcome, including families.",
    appointment: "You need to schedule an appointment.",
    medicaid: "yes",
    LGBT: "yes",
  },
  {
    id: 8,
    name: "Metropolitan Family Services - Southeast Chicago",
    desc: "Short and long term counseling services available to adults, children, and families. Metropolitan Family services focuses on Adult Mental Health, Children and Adolescent Mental Health, and Senior Counseling. In addition to counseling, they also have in-home respite, adult protective services, and support for caregivers, homeowners, and grandparents raising grandchildren.",
    lat: 41.73012,
    lng: -87.54775,
    hours: "8:30am-5:00pm",
    waitTime: "1-2 Weeks",
    addr1: "3062 East 91st Street",
    addr2: "Chicago, IL 60617",
    phone: "(773) 371-2900",
    web: "metrofamily.org/contact-us/",
    telehealth: "no",
    languages: "Spanish",
    financialAssistance:
      "There may be a sliding scale depending on the location and whether you have a referral",
    ageRestrictions: "No. All ages are welcome, including families.",
    appointment: "You need to schedule an appointment.",
    appointment: "yes",
    medicaid: "yes",
    LGBT: "yes",
  },
  {
    id: 9,
    name: "Metropolitan Family Services - Northside",
    desc: "Short and long term counseling services available to adults, children, and families. Metropolitan Family services focuses on Adult Mental Health, Children and Adolescent Mental Health, and Senior Counseling. In addition to counseling, they also have in-home respite, adult protective services, and support for caregivers, homeowners, and grandparents raising grandchildren.",
    hours: "8:30am-5:00pm",
    lat: 41.94014,
    lng: -87.76617,
    waitTime: "1-2 Weeks",
    addr1: "3249 North Central Ave",
    addr2: "Chicago, IL 60634",
    phone: "(773) 371-3700",
    web: "metrofamily.org/contact-us/",
    telehealth: "no",
    languages: "Spanish",
    financialAssistance:
      "There may be a sliding scale depending on the location and whether you have a referral",
    ageRestrictions: "No. All ages are welcome, including families.",
    appointment: "You need to schedule an appointment.",
    appointment: "yes",
    medicaid: "yes",
    LGBT: "yes",
  },
  {
    id: 10,
    name: "Metropolitan Family Services - DuPage",
    desc: "Short and long term counseling services available to adults, children, and families. Metropolitan Family services focuses on Adult Mental Health, Children and Adolescent Mental Health, and Senior Counseling. In addition to counseling, they also have in-home respite, adult protective services, and support for caregivers, homeowners, and grandparents raising grandchildren.",
    hours: "8:30am-5:00pm",
    lat: 41.86325,
    lng: -88.10404,
    waitTime: "1-2 Weeks",
    addr1: "222 East Willow Ave",
    addr2: "Wheaton, IL 60187",
    phone: "(630)784-4800",
    web: "metrofamily.org/contact-us/",
    telehealth: "no",
    languages: "Spanish",
    financialAssistance:
      "There may be a sliding scale depending on the location and whether you have a referral",
    ageRestrictions: "No. All ages are welcome, including families.",
    appointment: "You need to schedule an appointment.",
    medicaid: "yes",
    LGBT: "yes",
  },
  {
    id: 11,
    name: "Metropolitan Family Services - Southwest Suburbs",
    desc: "Short and long term counseling services available to adults, children, and families. Metropolitan Family services focuses on Adult Mental Health, Children and Adolescent Mental Health, and Senior Counseling. In addition to counseling, they also have in-home respite, adult protective services, and support for caregivers, homeowners, and grandparents raising grandchildren.",
    hours: "8:30am-5:00pm",
    lat: 41.65446,
    lng: -87.68013,
    waitTime: "1-2 Weeks",
    addr1: "13136 Western Ave",
    addr2: "Blue Island, IL 60406",
    phone: "(708) 974-2300",
    web: "metrofamily.org/contact-us/",
    telehealth: "no",
    languages: "Spanish",
    financialAssistance: "Yes, they offer income-based repayment",
    ageRestrictions: "No. All ages are welcome, including families.",
    appointment: "You need to schedule an appointment.",
    medicaid: "yes",
    LGBT: "yes",
  },
  {
    id: 12,
    name: "Metropolitan Family Services - Palos Hills",
    desc: "Short and long term counseling services available to adults, children, and families. Metropolitan Family services focuses on Adult Mental Health, Children and Adolescent Mental Health, and Senior Counseling. In addition to counseling, they also have in-home respite, adult protective services, and support for caregivers, homeowners, and grandparents raising grandchildren.",
    hours: "8:30am-5:00pm",
    lat: 41.69948,
    lng: -87.81716,
    waitTime: "1-2 Weeks",
    addr1: "10537 South Roberts Rd",
    addr2: "Palos Hills, IL 60465",
    phone: "(708) 974-2300",
    web: "metrofamily.org/contact-us/",
    telehealth: "no",
    languages: "Spanish",
    financialAssistance:
      "There may be a sliding scale depending on the location and whether you have a referral",
    ageRestrictions: "No. All ages are welcome, including families.",
    appointment: "You need to schedule an appointment",
    medicaid: "yes",
    LGBT: "yes",
  },
  {
    id: 13,
    name: "Thresholds",
    desc: "Thresholds provides clinical services for people with severe mental illness (must be already diagnosed/assessed and on Medicaid). This includes case management, psychiatric care, group and individual therapy, as well as the evidence-based practices of Wellness Management and Recovery and Integrated Dual Disorders Treatment.",
    hours: "9:00am-5:00pm",
    lat: 41.95608,
    lng: -87.67428,
    waitTime: "3-4 Weeks",
    addr1: "4101 N Ravenswood Ave",
    addr2: "Chicago, IL 60613",
    phone: "(773) 572-5500",
    web: "thresholds.org",
    telehealth: "yes",
    languages: "Spanish",
    financialAssistance: "Medicaid Only",
    ageRestrictions: "young adults aged 16-20",
    appointment:
      "You need to call to be placed on a waitlist. There are no walk-in's (and no in person assessments).",
    medicaid: "Yes. You must already have a diagnosed/assessed mental illness.",
    LGBT: "yes",
  },
  {
    id: 14,
    name: "Heartland Health Centers - Trilogy",
    desc: "Heartland Health Centers offers counseling, psychiatry, and behavioral health for patients who already have their primary care provider at Heartland",
    hours: "8:45am-4:00pm",
    lat: 42.0103,
    lng: -87.6684,
    waitTime: "varies",
    addr1: "1400 W Greenleaf Ave",
    addr2: "Chicago, IL 60626",
    phone: "(773) 751-7800",
    web: "heartlandhealthcenters.org/",
    telehealth: "unknown",
    languages: "Spanish",
    financialAssistance:
      "Yes, if eligible (If you are employed, there is a sliding scale fee of $30-$80 if you qualify. If you have insurance and don't want to use it, the full fee of $80 and up applies. Sliding scale is for only if you are employed and uninsured. If you are not employed and uninsured, you need a notarized letter of support from whomever is supporting you, and the visit would then be $30).",
    ageRestrictions: "no",
    appointment: "yes",
    medicaid: "Yes, as long as Heartland is assigned as the PCP",
    LGBT: "yes",
  },
  {
    id: 15,
    name: "Heartland Health Centers - Thresholds",
    desc: "Heartland Health Centers offers counseling, psychiatry, and behavioral health for patients who already have their primary care provider at Heartland",
    hours: "8:45am-4:00pm",
    lat: 41.96231,
    lng: -87.67356,
    waitTime:
      "You need to schedule an appointment with medical doctor first, so it depends on availability.",
    addr1: "4423 N Ravenswood Ave",
    addr2: "Chicago, IL 60640",
    phone: "(773) 432-6570",
    web: "heartlandhealthcenters.org/",
    telehealth: "unknown",
    languages: "Spanish",
    financialAssistance:
      "Yes, if eligible (If you are employed, there is a sliding scale fee of $30-$80 if you qualify. If you have insurance and don't want to use it, the full fee of $80 and up applies. Sliding scale is for only if you are employed and uninsured. If you are not employed and uninsured, you need a notarized letter of support from whomever is supporting you, and the visit would then be $30).",
    ageRestrictions: "No all ages are welcome",
    appointment: "You need an appointment",
    medicaid: "Yes, as long as Heartland is assigned as the PCP",
    LGBT: "yes",
  },
  {
    id: 16,
    name: "Heartland Health Centers - C4 Broadway",
    desc: "Heartland Health Centers offers counseling, psychiatry, and behavioral health for patients who already have their primary care provider at Heartland",
    hours: "8:45am-4:00pm",
    lat: 41.98595,
    lng: -87.66055,
    waitTime: "varies",
    addr1: "5710 N Broadway St",
    addr2: "Chicago, IL 60660",
    phone: "(773) 728-1000",
    web: "heartlandhealthcenters.org/",
    telehealth: "unknown",
    languages: "Spanish",
    financialAssistance:
      "Yes, if eligible (If you are employed, there is a sliding scale fee of $30-$80 if you qualify. If you have insurance and don't want to use it, the full fee of $80 and up applies. Sliding scale is for only if you are employed and uninsured. If you are not employed and uninsured, you need a notarized letter of support from whomever is supporting you, and the visit would then be $30).",
    ageRestrictions: "no",
    appointment: "yes",
    medicaid: "Yes, as long as Heartland is assigned as the PCP",
    LGBT: "yes",
  },
  {
    id: 17,
    name: "Heartland Health Centers - Harrison Street",
    desc: "Heartland Health Centers offers counseling, psychiatry, and behavioral health for patients who already have their primary care provider at Heartland",
    hours: "8:45am-4:00pm",
    lat: 41.87372,
    lng: -87.70341,
    waitTime: "varies",
    addr1: "3015 W Harrison St",
    addr2: "Chicago, IL 60612",
    phone: "(773) 728-1000",
    web: "heartlandhealthcenters.org/",
    telehealth: "unknown",
    languages: "Spanish",
    financialAssistance:
      "Yes, if eligible (If you are employed, there is a sliding scale fee of $30-$80 if you qualify. If you have insurance and don't want to use it, the full fee of $80 and up applies. Sliding scale is for only if you are employed and uninsured. If you are not employed and uninsured, you need a notarized letter of support from whomever is supporting you, and the visit would then be $30).",
    ageRestrictions: "no",
    appointment: "yes",
    medicaid: "Yes, as long as Heartland is assigned as the PCP",
    LGBT: "yes",
  },
  {
    id: 18,
    name: "NAMI Chicago",
    desc: "NAMI Chicago's free and confidential Helpline is open seven days a week, staffed by clinicians and peers who can guide you through types of treatment, lend a compassionate ear, connect you to legal and housing support, and can also provide resources for mental health professionals and clinicians. We are there for family members, individuals, friends, and communities in need of mental health support",
    hours: "Monday - Friday, 9:00am- 8:00pm Saturday - Sunday, 9:00am- 5:00pm",
    lat: 41.95677,
    lng: -87.6753,
    waitTime:
      "The helpline can refer you to a counselor. The wait time may depend on your specific needs",
    addr1: "1801 W Warner Ave Suite 202",
    addr2: "Chicago, IL 60613",
    phone: "(833) 626-4244",
    web: "www.namichicago.org/",
    telehealth: "yes",
    languages: "Spanish",
    financialAssistance: "the referral is free",
    ageRestrictions: "No, anyone can use this service",
    appointment: "yes",
    medicaid: "there's no fee for this service",
    LGBT: "yes",
  },
  {
    id: 19,
    name: "Catholic Charities - Youth and Family Therapeutic Services",
    desc: "The Youth and Family Therapeutic Services provides trauma informed and strengths-based counseling services to children and families through a variety of counseling programs. Individual, family and group sessions assist children and families experiencing a wide range of social and personal problems impacting their ability to cope. The program accepts children and families throughout Cook County.",
    hours: "8:30am to 4:30pm",
    lat: 41.8666336,
    lng: -87.6864436,
    waitTime: "This depends on the service.",
    addr1: "2310 W. Roosevelt 2nd Fl",
    addr2: "Chicago, IL 60608",
    phone: "(312) 655-7191",
    web: "catholiccharities.net/",
    telehealth: "no",
    languages: "Spanish",
    financialAssistance:
      "Subsidized fee available based on household and income size.",
    ageRestrictions: "yes, ages 3-18",
    appointment: "You need to schedule an appointment.",
    medicaid: "PPO and Medicaid plans are accepted",
    LGBT: "yes",
  },
  {
    id: 20,
    name: "Catholic Charities - Englewood",
    desc: "The Youth and Family Therapeutic Services provides trauma informed and strengths-based counseling services to children and families through a variety of counseling programs. Individual, family and group sessions assist children and families experiencing a wide range of social and personal problems impacting their ability to cope. The program accepts children and families throughout Cook County.",
    hours: "8:30am to 4:30pm",
    lat: 41.78094,
    lng: -87.64487,
    waitTime: "This depends on the service.",
    addr1: "6202 S Halsted St",
    addr2: "Chicago, IL 60621",
    phone: "(312) 655-7191",
    web: "catholiccharities.net/",
    telehealth: "no",
    languages: "Spanish",
    financialAssistance:
      "Subsidized fee available based on household and income size.",
    ageRestrictions: "yes, ages 3-18",
    appointment: "You need to schedule an appointment.",
    medicaid: "PPO and Medicaid plans are accepted",
    LGBT: "yes",
  },
  {
    id: 21,
    name: "Catholic Charities - Community Family Service Center",
    desc: "The Youth and Family Therapeutic Services provides trauma informed and strengths-based counseling services to children and families through a variety of counseling programs. Individual, family and group sessions assist children and families experiencing a wide range of social and personal problems impacting their ability to cope. The program accepts children and families throughout Cook County.",
    hours: "8:30am to 4:30pm",
    lat: 41.86833,
    lng: -87.65556,
    waitTime: "This depends on the service.",
    addr1: "1100 S May St 2nd floor",
    addr2: "Chicago, IL 60607",
    phone: "(312) 655-7191",
    web: "catholiccharities.net/",
    telehealth: "no",
    languages: "Spanish",
    financialAssistance:
      "Subsidized fee available based on household and income size.",
    ageRestrictions: "yes, ages 3-18",
    appointment: "You need to schedule an appointment.",
    medicaid: "PPO and Medicaid plans are accepted",
    LGBT: "yes",
  },
  {
    id: 22,
    name: "Catholic Charities - Roseland",
    desc: "The Youth and Family Therapeutic Services provides trauma informed and strengths-based counseling services to children and families through a variety of counseling programs. Individual, family and group sessions assist children and families experiencing a wide range of social and personal problems impacting their ability to cope. The program accepts children and families throughout Cook County.",
    hours: "8:30am to 4:30pm",
    lat: 41.68925,
    lng: -87.6207,
    waitTime: "This depends on the service.",
    addr1: "11255 S Michigan Ave",
    addr2: "Chicago, IL 60628",
    phone: "(312) 655-7191",
    web: "catholiccharities.net/",
    telehealth: "no",
    languages: "Spanish",
    financialAssistance:
      "Subsidized fee available based on household and income size.",
    ageRestrictions: "yes, ages 3-18",
    appointment: "You need to schedule an appointment.",
    medicaid: "PPO and Medicaid plans are accepted",
    LGBT: "yes",
  },
  {
    id: 23,
    name: "I Am Able Center",
    desc: "I AM ABLE provides individual, couple, family, and group counseling services. This includes but is not limited to DCFS Counseling, Anger Management, Domestic Violence, and/or Parenting Classes and etc. Bring government issued id, insurance card, proof of income for the last 30 days for intake.",
    hours: "Monday-Thursday 9:00am - 7:00pm and Friday 9:00am - 5:00pm",
    lat: 41.86659,
    lng: -87.71108,
    waitTime: "48 hours for intake response/scheduling",
    addr1: "3410 West Roosevelt Road",
    addr2: "Chicago, IL 60624",
    phone: "(773)840-8108",
    web: "catholiccharities.net/",
    telehealth: "no",
    languages: "unknown",
    financialAssistance:
      "Yes, $45/Individual and $60/Family (must be immediate family members in the same household) intake fees are required at intake appointment",
    ageRestrictions: "Must be 18+",
    appointment: "call for intake",
    medicaid:
      "Yes. They take Medicaid, County Care, Blue Cross Blue Shield of IL PPO, and Molina",
    LGBT: "yes",
  },
  {
    id: 24,
    name: "Broadway Youth Center",
    desc: "BYC provides basic needs assistance, resource advocacy, mental wellness supports, on-site psychiatry services, and telehealth.",
    hours: `Mondays 10 a.m. – 6 p.m. 
            Tuesdays – 10 a.m. – 6 p.m. 
            Wednesdays – Closed 
            Thursdays – Sexual health services until 1 p.m. 
            Provider available from 1 p.m. – 6 p.m. 
            Fridays – 10 a.m. – 6 p.m. 
            Note: The latest available appointment is until 5:20 p.m.`,
    lat: 41.955,
    lng: -87.65047,
    waitTime:
      "The closer to 10am you can arrive, the better. Slots start to fill up after that",
    addr1: "4009 N Broadway St",
    addr2: "Chicago, IL 60613",
    phone0: "Contact Dr Ari Natinsky, PsyD",
    phone: "773-388-1600;9",
    web: "howardbrown.org/service/broadway-youth-center/",
    telehealth: "no",
    languages: "Spanish",
    financialAssistance:
      "Yes, based on income ($5 for low income). If unemployed, you can sign a waiver for no income. If employed, you have to email check stubs. Regardless of insurance status, BYC never takes payments on-site.",
    ageRestrictions: "Ages 12-24",
    appointment: "They take walkins",
    medicaid: "yes",
    LGBT: "yes",
  },
];

var customMarker = L.Marker.extend({
  options: {
    customId: "",
  },
});

var markerArray = [];

var mymap = L.map("mapid").setView([41.81944, -87.7], 9.9);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: key,
  }
).addTo(mymap);

var sidebar = L.control.sidebar("sidebar", {
  position: "left",
});

mymap.addControl(sidebar);

var directory = locationData.map((loc) => {
  return { id: loc.id, name: loc.name };
});
console.log(directory);

sidebar.on("hidden", function () {
  sidebar.setContent(sidebarContent);
  
  // sidebar.toggle();
});

function createDirectory(directory) {
  var anchor = document.createElement("div");
  // anchor.style.paddingTop = "2rem"
  var header = document.createElement("h2");
  var headerText = document.createTextNode("Mental Health Services");
  header.appendChild(headerText);
  anchor.appendChild(header);

  directory.forEach((locat) => {
    var dir = document.createElement("div");
    dir.classList.add("directory-entry");
    dir.style.borderBottom = "solid";
    dir.style.borderWidth = "1px";

    dir.setAttribute("index", locat.id);

    var text = document.createTextNode(locat.name);
    dir.appendChild(text);
    anchor.appendChild(dir);
  });

  return anchor;
}

var sidebarContent = createDirectory(directory);

sidebar.setContent(sidebarContent);

setTimeout(function () {
  sidebar.show();
}, 500);

var legend = L.control({ position: "topleft" });
legend.onAdd = function (map) {
  var link = L.DomUtil.create("div", "legend");
  link.href = "#";
  L.DomEvent.on(link, "click", L.DomEvent.stopPropagation)
    .on(link, "click", L.DomEvent.preventDefault)
    .on(link, "click", function () {
      sidebar.toggle();
    });
  link.innerHTML = "Directory";
  return link;
};
legend.addTo(mymap);


locationData.forEach((loc) => {
  var marker = new customMarker([loc.lat, loc.lng], {
    customId: loc.id,
    riseOnHover: true,
  })
    .addTo(mymap)
    .on("click", function () {
      console.log(this.options.customId);

      var visible = sidebar.isVisible();
      let location = locationData[this.options.customId - 1];
      let html = generateContent(location);
      sidebar.setContent(html);

      if (visible == false) {
        sidebar.toggle();
      }
    });
  markerArray.push(marker);
});

var element = document.getElementsByClassName("directory-entry");

function clicky(event) {
  // console.log(event.target)
  var index = event.target.getAttribute("index");
  var data = locationData[index - 1];
  // var latlng = markerArray[index-1].latlng
  // mymap.setView(latlng,5);

  // markerArray[index-1].isVisible = false

  // for (i = 0; i < markerArray)
  // console.log(markerArray[index-1])

  console.log(data);
  sidebar.setContent(generateContent(data));
}

function generateContent(loc) {
  return `
    <div>
    <h1 id="sidebar-name">${loc.name}</h1>
    <p id="sidebar-desc">${loc.desc}</p>
    <p id="sidebar-desc"><b>Address: </b>${loc.addr1}<br/>${loc.addr2}</p>
    <p id="sidebar-hours"><b>Hours: </b>${loc.hours}</p>
    <p id="sidebar-wait"><b>What is the approximate wait time to meet with a counselor? </b>${loc.waitTime}</p>
    <p id="sidebar-phone"><b>Phone: </b><a href=tel:${loc.phone}>${loc.phone}</a</p></a>
    <p id="sidebar-web"><b>Web: </b><a href=${loc.web}>${loc.web}</a></p>    
    <p id="sidebar-lang><b>In what other languages can I get help? </b>${loc.languages}
    <p id="sidebar-financing"><b> Is there some help in paying for services? </b>${loc.financialAssistance}</p>
    <p id="sidebar-ages"><b> Are there any age restrictions to use their services? </b>${loc.ageRestrictions}</p>
    <p id="sidebar-appointment"><b>Do I need to schedule an appointment or can I walk in? </b>${loc.appointment}</p>
    <p id="sidebar-medicaid"><b>Do they take Medicaid? </b>${loc.medicaid}</p>
    <p id="sidebar-lgbt"><b>Are they queer friendly?  </b>${loc.LGBT}</p>
    <p id="sidebar-lgbt-1"><b>Do they work with trans youth?  </b>${loc.LGBT}</p>

    </div>
    `;
}

document.querySelectorAll(".directory-entry").forEach((i) => {
  i.addEventListener("click", (e) => clicky(e));
});

//     <p id="sidebar-telehealth"><br>Does this location offer telehealth services? </b>${loc.telehealth}</p>

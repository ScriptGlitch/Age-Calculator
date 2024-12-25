let countdownInterval;
window.onload = function () {
  const birthTimeInput = document.getElementById("birthTime");
  birthTimeInput.value = "00:00";
  const currentDateInput = document.getElementById("currentDate");
  const currentTimeInput = document.getElementById("currentTime");
  const today = new Date();
  const hour = String(today.getHours()).padStart(2, "0");
  const minute = String(today.getMinutes()).padStart(2, "0");
  const formattedTime = `${hour}:${minute}`;
  currentTimeInput.value = formattedTime;
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  currentDateInput.value = formattedDate;
  const calculateAgeButton = document.getElementById("calculateAgeButton");
  calculateAgeButton.addEventListener("click", calculateAge);
};
function calculateAge() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
  document.getElementById("countdown").textContent =
    "Refresh the page and calculate Again";
  const birthdate = new Date(document.getElementById("birthdate").value);
  const birthTime = document.getElementById("birthTime").value;
  const currentDate = new Date(document.getElementById("currentDate").value);
  const currentTime = document.getElementById("currentTime").value;
  const [birthHour, birthMinute] = birthTime.split(":");
  birthdate.setHours(parseInt(birthHour), parseInt(birthMinute), 0, 0);
  const [currentHour, currentMinute] = currentTime.split(":");
  currentDate.setHours(parseInt(currentHour), parseInt(currentMinute), 0, 0);
  const ageInMilliseconds = currentDate - birthdate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const years = Math.floor(ageInSeconds / (365.25 * 24 * 60 * 60));
  const months = Math.floor(
    (ageInSeconds % (365.25 * 24 * 60 * 60)) / (30.44 * 24 * 60 * 60)
  );
  const days = Math.floor(
    (ageInSeconds % (30.44 * 24 * 60 * 60)) / (24 * 60 * 60)
  );
  const hours = Math.floor((ageInSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((ageInSeconds % (60 * 60)) / 60);
  const seconds = Math.floor(ageInSeconds % 60);
  document.getElementById(
    "age"
  ).textContent = `${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes`;
  document.getElementById("totalMonths").textContent = calculateTotalMonths(
    birthdate,
    currentDate
  );
  document.getElementById("totalWeeks").textContent = calculateTotalWeeks(
    birthdate,
    currentDate
  );
  document.getElementById("totalDays").textContent = calculateTotalDays(
    birthdate,
    currentDate
  );
  document.getElementById("totalHours").textContent = calculateTotalHours(
    birthdate,
    currentDate
  );
  document.getElementById("totalMinutes").textContent = calculateTotalMinutes(
    birthdate,
    currentDate
  );
  document.getElementById("totalSeconds").textContent = calculateTotalSeconds(
    birthdate,
    currentDate
  );
  document.getElementById("resultContainer").style.display = "block";
  calculateMilestones(birthdate);
  calculateAgeOnOtherPlanets(ageInSeconds);
  calculateAgeInAnimalYears(ageInSeconds);
  calculateFunFacts(birthdate, currentDate);
  const birthYear = birthdate.getFullYear();
  getGeneration(birthYear);
  const zodiac = getZodiacSign(birthdate);
  const zodiacDetails = getZodiacDetails(zodiac);
  document.getElementById("zodiacSign").textContent = zodiacDetails.sign;
  document.getElementById("zodiacSymbol").textContent = zodiacDetails.symbol;
  document.getElementById("zodiacElement").textContent = zodiacDetails.element;
  document.getElementById("zodiacDetails").textContent = zodiacDetails.details;
  const averageLifeExpectancyGlobal = 72.6;
  const averageLifeExpectancyAsia = 74.5;
  const averageLifeExpectancyBangladesh = 73.7;
  const data = {
    labels: ["Your Age", "Bangladesh", "Asia", "Global"],
    datasets: [
      {
        label: "Age",
        data: [
          years,
          averageLifeExpectancyGlobal,
          averageLifeExpectancyAsia,
          averageLifeExpectancyBangladesh,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
        x: {
          ticks: {
            autoSkip: false,
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              const label = tooltipItem.dataset.label || "";
              const value = tooltipItem.raw;
              return `${label}: ${value}`;
            },
          },
        },
      },
    },
  };
  const chartCanvas = document.getElementById("ageChart").getContext("2d");
  const chart = new Chart(chartCanvas, config);
  startNextBirthdayCountdown(birthdate);
}
function startNextBirthdayCountdown(birthdate) {
  const today = new Date();
  let nextBirthday = new Date(
    today.getFullYear(),
    birthdate.getMonth(),
    birthdate.getDate()
  );
  if (nextBirthday < today) {
    nextBirthday = new Date(
      today.getFullYear() + 1,
      birthdate.getMonth(),
      birthdate.getDate()
    );
  }
  document.getElementById("countdown").textContent = "Calculating...";
  countdownInterval = setInterval(function () {
    const now = new Date();
    const timeDiff = nextBirthday - now;
    if (timeDiff > 0) {
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      document.getElementById(
        "countdown"
      ).textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      clearInterval(countdownInterval);
      document.getElementById("countdown").textContent = "Happy Birthday!";
    }
  }, 1);
}
function calculateTotalMonths(birthdate, currentDate) {
  const diffInMonths =
    (currentDate.getFullYear() - birthdate.getFullYear()) * 12 +
    (currentDate.getMonth() - birthdate.getMonth());
  return diffInMonths;
}
function calculateTotalWeeks(birthdate, currentDate) {
  const diffInMilliseconds = currentDate - birthdate;
  const diffInWeeks = Math.floor(
    diffInMilliseconds / (7 * 24 * 60 * 60 * 1000)
  );
  return diffInWeeks;
}
function calculateTotalDays(birthdate, currentDate) {
  const diffInMilliseconds = currentDate - birthdate;
  const diffInDays = Math.floor(diffInMilliseconds / (24 * 60 * 60 * 1000));
  return diffInDays;
}
function calculateTotalHours(birthdate, currentDate) {
  const diffInMilliseconds = currentDate - birthdate;
  const diffInHours = Math.floor(diffInMilliseconds / (60 * 60 * 1000));
  return diffInHours;
}
function calculateTotalMinutes(birthdate, currentDate) {
  const diffInMilliseconds = currentDate - birthdate;
  const diffInMinutes = Math.floor(diffInMilliseconds / (60 * 1000));
  return diffInMinutes;
}
function calculateTotalSeconds(birthdate, currentDate) {
  const diffInMilliseconds = currentDate - birthdate;
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  return diffInSeconds;
}
function getZodiacSign(date) {
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
    return "Aquarius";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
    return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
    return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
    return "Capricorn";
  return "Unknown";
}
function getZodiacDetails(sign) {
  const zodiacData = {
    Aries: {
      sign: "Aries (মেষ)",
      symbol: "♈",
      element: "Fire",
      details:
        "Aries loves to be number one, so it’s no surprise that these audacious rams are the first sign of the zodiac. Bold and ambitious, Aries dives headfirst into even the most challenging situations (which is appropriate, since the body part associated with Aries is the head). Like their fellow fire signs, Leo and Sagittarius, Aries is a passionate, motivated, and confident leader who builds community with their cheerful disposition and relentless determination. Uncomplicated and direct in their approach, they often get frustrated by exhaustive details and unnecessary nuances.",
    },
    Taurus: {
      sign: "Taurus (বৃষ)",
      symbol: "♉",
      element: "Earth",
      details:
        "Taurus is an earth sign represented by the bull. Like their celestial animal counterpart, Taureans enjoy relaxing in serene, bucolic environments, surrounded by soft sounds, soothing aromas, and succulent flavors. Taurus is ruled by Venus, the enchanting planet that governs love, beauty, and money. Taurus’s Venusian influence make this earth sign the most sensual of the zodiac: These cosmic oxen are enchanted by any physical manifestation of comfort and luxury.",
    },
    Gemini: {
      sign: "Gemini (মিথুন)",
      symbol: "♊",
      element: "Air",
      details:
        "Have you ever been so busy that you wished you could clone yourself just to get everything done? Thats the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself.",
    },
    Cancer: {
      sign: "Cancer (কর্কট)",
      symbol: "♋",
      element: "Water",
      details:
        "Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But—just like the hard-shelled crustaceans—this water sign is willing to do whatever it takes to protect itself emotionally. In order to get to know this sign, you’re going to need to establish trust! ",
    },
    Leo: {
      sign: "Leo (সিংহ)",
      symbol: "♌",
      element: "Fire",
      details:
        "Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They’re delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves.",
    },
    Virgo: {
      sign: "Virgo (কন্যা)",
      symbol: "♍",
      element: "Earth",
      details:
        'You know the expression, "if you want something done, give it to a busy person?" Well, that definitely is the Virgo anthem. Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo’s deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.',
    },
    Libra: {
      sign: "Libra (তুলা)",
      symbol: "♎",
      element: "Air",
      details:
        "Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra’s fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart.",
    },
    Scorpio: {
      sign: "Scorpio (বৃশ্চিক)",
      symbol: "♏",
      element: "Water",
      details:
        "Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac.",
    },
    Sagittarius: {
      sign: "Sagittarius (ধনু)",
      symbol: "♐",
      element: "Fire",
      details:
        "Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.",
    },
    Capricorn: {
      sign: "Capricorn (মকর)",
      symbol: "♑",
      element: "Earth",
      details:
        "What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.",
    },
    Aquarius: {
      sign: "Aquarius (কুম্ভ)",
      symbol: "♒",
      element: "Air",
      details:
        'Despite the "aqua" in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place.',
    },
    Pisces: {
      sign: "Pisces (মীন)",
      symbol: "♓",
      element: "Water",
      details:
        'If you looked up the word "psychic" in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and that’s because it’s the last of the last. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It’s symbolized by two fish swimming in opposite directions, representing the constant division of Pisces’ attention between fantasy and reality. ',
    },
  };
  return (
    zodiacData[sign] || {
      sign: "Unknown",
      symbol: "Unknown",
      element: "Unknown",
      details: "No details available.",
    }
  );
}
function calculateTotalMonths(birthdate, currentDate) {
  const diffInMonths =
    (currentDate.getFullYear() - birthdate.getFullYear()) * 12 +
    (currentDate.getMonth() - birthdate.getMonth());
  return diffInMonths;
}
function calculateTotalWeeks(birthdate, currentDate) {
  const diffInWeeks = Math.floor(
    calculateTotalDays(birthdate, currentDate) / 7
  );
  return diffInWeeks;
}
function calculateTotalDays(birthdate, currentDate) {
  const diffInDays = Math.floor(
    (currentDate - birthdate) / (24 * 60 * 60 * 1000)
  );
  return diffInDays;
}
function calculateTotalHours(birthdate, currentDate) {
  const diffInHours = Math.floor((currentDate - birthdate) / (60 * 60 * 1000));
  return diffInHours;
}
function calculateTotalMinutes(birthdate, currentDate) {
  const diffInMinutes = Math.floor((currentDate - birthdate) / (60 * 1000));
  return diffInMinutes;
}
function calculateTotalSeconds(birthdate, currentDate) {
  const diffInSeconds = Math.floor((currentDate - birthdate) / 1000);
  return diffInSeconds;
}
function calculateMilestones(birthdate) {
  const milestones = [
    500, 1000, 2000, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000,
  ];
  const today = new Date();
  milestones.forEach((milestone) => {
    const milestoneDate = new Date(birthdate);
    milestoneDate.setDate(birthdate.getDate() + milestone);
    const formattedDate = formatDate(milestoneDate);
    const milestoneElement = document.getElementById(`milestone${milestone}`);
    if (milestoneDate < today) {
      milestoneElement.textContent = `You were ${milestone} days old on ${formattedDate}`;
    } else {
      milestoneElement.textContent = `You will be ${milestone} days old on ${formattedDate}`;
    }
  });
}
function formatDate(date) {
  const options = { day: "numeric", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
function calculateAgeOnOtherPlanets(ageInSeconds) {
  const planetOrbitalPeriods = {
    Mercury: 87.97,
    Venus: 224.7,
    Mars: 686.98,
    Jupiter: 4332.82,
    Saturn: 10755.7,
    Uranus: 30687.15,
    Neptune: 60190.03,
  };
  for (const planet in planetOrbitalPeriods) {
    const planetAgeInSeconds =
      ageInSeconds / (planetOrbitalPeriods[planet] * 24 * 60 * 60);
    const planetAgeYears = planetAgeInSeconds.toFixed(2);
    const wholeYears = Math.floor(planetAgeInSeconds);
    const remainingDays = Math.floor(
      (planetAgeInSeconds - wholeYears) * planetOrbitalPeriods[planet]
    );
    const planetAgeElement = document.getElementById(`${planet}Age`);
    planetAgeElement.textContent = `${planetAgeYears} years (${wholeYears} years ${remainingDays} days)`;
  }
}
function calculateAgeInAnimalYears(ageInSeconds) {
  const falconYears = Math.floor(ageInSeconds / (365 * 24 * 60 * 60)) * 3;
  const eagleYears = Math.floor(ageInSeconds / (365 * 24 * 60 * 60)) * 4;
  const pegionYears = Math.floor(ageInSeconds / (365 * 24 * 60 * 60)) * 2;
  const catYears = Math.floor(ageInSeconds / (365 * 24 * 60 * 60)) * 7;
  const cheetahYears = Math.floor(ageInSeconds / (365 * 24 * 60 * 60)) * 10;
  const lionYears = Math.floor(ageInSeconds / (365 * 24 * 60 * 60)) * 12;
  const tigerYears = Math.floor(ageInSeconds / (365 * 24 * 60 * 60)) * 11;
  const horseYears = Math.floor(ageInSeconds / (365 * 24 * 60 * 60)) * 5;
  const deerYears = Math.floor(ageInSeconds / (365 * 24 * 60 * 60)) * 15;
  const whaleYears = Math.floor(ageInSeconds / (365 * 24 * 60 * 60)) * 70;
  const dolphinYears = Math.floor(ageInSeconds / (365 * 24 * 60 * 60)) * 25;
  document.getElementById("falconAge").textContent = `${falconYears} years`;
  document.getElementById("eagleAge").textContent = `${eagleYears} years`;
  document.getElementById("pegionAge").textContent = `${pegionYears} years`;
  document.getElementById("catAge").textContent = `${catYears} years`;
  document.getElementById("cheetahAge").textContent = `${cheetahYears} years`;
  document.getElementById("lionAge").textContent = `${lionYears} years`;
  document.getElementById("tigerAge").textContent = `${tigerYears} years`;
  document.getElementById("horseAge").textContent = `${horseYears} years`;
  document.getElementById("deerAge").textContent = `${deerYears} years`;
  document.getElementById("whaleAge").textContent = `${whaleYears} years`;
  document.getElementById("dolphinAge").textContent = `${dolphinYears} years`;
}
function calculateFunFacts(birthdate, currentDate) {
  const today = new Date();
  const birthYear = birthdate.getFullYear();
  const currentYear = currentDate.getFullYear();
  let leapYearsCount = 0;
  let leapYears = [];
  for (let year = birthYear; year <= currentYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapYearsCount++;
      leapYears.push(year);
    }
  }
  const formattedLeapYears = leapYears.join(", ");
  const birthDay = birthdate.toLocaleDateString("en-US", { weekday: "long" });
  const formattedBirthDay = `<span style="color: red; font-weight: bold;">${birthDay}</span>`;
  const nextBirthday = new Date(
    currentDate.getFullYear(),
    birthdate.getMonth(),
    birthdate.getDate()
  );
  if (nextBirthday < currentDate) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }
  const daysUntilNextBirthday = Math.ceil(
    (nextBirthday - currentDate) / (1000 * 60 * 60 * 24)
  );
  const formattedDaysUntilNextBirthday = `<span style="color: red; font-weight: bold;">${daysUntilNextBirthday}</span>`;
  const nextBirthdayDay = nextBirthday.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const formattedNextBirthdayDay = `<span style="color: red; font-weight: bold;">${nextBirthdayDay}</span>`;
  let totalCandlesCount = 0;
  for (let i = 1; i <= currentYear - birthYear; i++) {
    totalCandlesCount += i;
  }
  const formattedTotalCandlesCount = `<span style="color: red; font-weight: bold;">${totalCandlesCount}</span>`;
  const averageHeartbeatsPerSecond = 1;
  const totalSeconds = calculateTotalSeconds(birthdate, currentDate);
  const totalHeartBeatsCount = totalSeconds * averageHeartbeatsPerSecond;
  const formattedTotalHeartBeatsCount = `<span style="color: red; font-weight: bold;">${totalHeartBeatsCount}</span>`;
  const averageBreathsPerSecond = 16 / 60;
  const totalBreathsCount = totalSeconds * averageBreathsPerSecond;
  const formattedTotalBreathsCount = `<span style="color: red; font-weight: bold;">${totalBreathsCount}</span>`;
  const totalDays = calculateTotalDays(birthdate, currentDate);
  const averageSleepHoursPerDay = 8;
  const totalSleepHoursCount = totalDays * averageSleepHoursPerDay;
  const formattedTotalSleepHoursCount = `<span style="color: red; font-weight: bold;">${totalSleepHoursCount}</span>`;
  document.getElementById("totalSleepTime").innerHTML =
    formattedTotalSleepHoursCount;
  document.getElementById("totalSleepTime").innerHTML = `
You have spent approximately ${formattedTotalSleepHoursCount} hours of your life sleeping.
  <span class="tooltip"> <i class="fa-solid fa-circle-info"></i> 
    <span class="tooltiptext"><span style="color: #ff0040; font-size: 1.1em; font-weight: bold">[Assuming 8 hours of sleep per day]</span><br>This estimate assumes that you sleep an average of 8 hours each night. The actual amount of sleep varies based on individual habits, health, and lifestyle, but this provides a general estimate of the total time spent sleeping in your lifetime.</span>
  </span>
`;
  const averageLightTravelInKMperSecond = 299792;
  const totalLightTravelInKM = totalSeconds * averageLightTravelInKMperSecond;
  const formattedTotalLightTravelInKM = `<span style="color: red; font-weight: bold;">${totalLightTravelInKM.toLocaleString()}</span>`;
  const scientificTotalLightTravelInKM = totalLightTravelInKM.toExponential(3);
  document.getElementById("totalLightTravel").innerHTML = `
  Light has traveled approximately <span style="color: red; font-weight: bold;">${formattedTotalLightTravelInKM} (${scientificTotalLightTravelInKM})</span> kilometers since you were born.
  <span class="tooltip"> <i class="fa-solid fa-circle-info"></i>
    <span class="tooltiptext">
      <span style="color: #ff0040; font-size: 1.1em; font-weight: bold">[Speed of light: 299,792 kilometers per second]</span><br>
     Light is the fastest known entity in the universe, and it travels at an incredible speed of approximately 299,792 kilometers every second. 
      Over the years, this distance accumulates to an astonishing figure, highlighting the vastness of the universe and the speed at which light travels. 
      It’s fascinating to think about how far light can travel in just one year—about 9.46 trillion kilometers—making this calculation a fun way to conceptualize time and distance in the cosmos.
      <p>The total distance light has traveled can be calculated using the following formula:</p>
      <span style="color: #ff0040; font-size: 13px; font-weight: bold">
      <p>
      $$ \\text{Total Distance}  $$
      $$ = \\text{Total seconds you have lived} \\times 299,792 \ $$
      </p>
      </span>
    </span>
  </span>
`;
  const totalSunriseCount = calculateTotalDays(birthdate, currentDate);
  const formattedTotalSunriseCount = `<span style="color: red; font-weight: bold;">${totalSunriseCount}</span>`;
  document.getElementById("totalSunriseCount").innerHTML = `
  The sun has risen ${formattedTotalSunriseCount} times since you were born.
  <span class="tooltip"> <i class="fa-solid fa-circle-info"></i>
    <span class="tooltiptext">
      <p>The total number of sunrises you've experienced is a reflection of the days you have lived. Every day the sun rises, marking the beginning of a new day, and this count accumulates with each passing day of your life.</p>
      <span style="color: #ff0040; font-size: 13px; font-weight: bold">
      <p>
      $$ \\text{Total Sunrises} = \\text{Total days you have lived} $$
      </p>
      </span>
      <p>Each sunrise symbolizes a new opportunity and a fresh start, reminding us of the passage of time and the beauty of nature.</p>
    </span>
  </span>
`;
  const totalMoonOrbitsCount = Math.floor(
    calculateTotalDays(birthdate, currentDate) / 29.53
  );
  const formattedTotalMoonOrbitsCount = `<span style="color: red; font-weight: bold;">${totalMoonOrbitsCount}</span>`;
  document.getElementById("totalMoonOrbitsCount").innerHTML = `
  The moon has orbited the Earth ${formattedTotalMoonOrbitsCount} times since you were born.
  <span class="tooltip"> <i class="fa-solid fa-circle-info"></i>
    <span class="tooltiptext">
      <p>The total number of moon orbits reflects the number of lunar cycles that have occurred during your lifetime. The moon completes one orbit around the Earth approximately every 29.53 days, marking the phases of the lunar month.</p>
      <p>We can calculate the total number of moon orbits using this formula:</p>
     <span style="color: #ff0040; font-size: 13px; font-weight: bold">
      <p>
      $$ \\text{Total Moon Orbits} = \\frac{\\text{Total days you have lived}}{29.53} $$
      </p>
      </span>
      <p>Each orbit represents not just the movement of the moon, but also the rhythmic cycles that influence our tides, calendars, and even our emotions. It serves as a reminder of the interconnectedness of celestial bodies and our own lives.</p>
    </span>
  </span>
`;
  const totalEarthOrbitsCount = Math.floor(
    calculateTotalDays(birthdate, currentDate) / 365.25
  );
  const formattedTotalEarthOrbitsCount = `<span style="color: red; font-weight: bold;">${totalEarthOrbitsCount}</span>`;
  document.getElementById("totalEarthOrbitsCount").innerHTML = `
  The Earth has orbited the Sun ${formattedTotalEarthOrbitsCount} times since you were born.
  <span class="tooltip"> <i class="fa-solid fa-circle-info"></i>
    <span class="tooltiptext">
      <p>This figure represents the total number of times our planet has completed its journey around the Sun since the moment you entered this world. On average, it takes the Earth about 365.25 days to complete one full orbit, which is why we add an extra day every four years in leap years to keep our calendars in sync.</p>
      <p>We can calculate the total number of Earth orbits using this formula:</p>
     <span style="color: #ff0040; font-size: 13px; font-weight: bold">
      <p>
      $$ \\text{Total Earth Orbits} = \\frac{\\text{Total days you have lived}}{365.25} $$
      </p>
      </span>
      <p>This cosmic journey not only defines our years but also influences the changing seasons, climate patterns, and the very rhythm of life on Earth. Each orbit is a reminder of our place in the universe and the passage of time.</p>
    </span>
  </span>
`;
  const distanceAsSunRevolves = totalEarthOrbitsCount * 792000;
  const formattedDistanceAsSunRevolves = `
  <span style="color: red; font-weight: bold;">${distanceAsSunRevolves.toLocaleString()} (${distanceAsSunRevolves.toExponential(
    2
  )})</span>
`;
  document.getElementById("distanceAsSunRevolves").innerHTML = `
  You have traveled approximately ${formattedDistanceAsSunRevolves} kilometers as the Sun revolves around the center of the Milky Way.
  <span class="tooltip"> <i class="fa-solid fa-circle-info"></i>
    <span class="tooltiptext">
      <p>This estimate is based on the average distance traveled by the Earth per orbit around the Milky Way's center, which is approximately 792,000 kilometers per orbit. The total distance can be calculated using the following formula:</p>
     <span style="color: #ff0040; font-size: 13px; font-weight: bold">
      <p>
      $$ \\text{Total Distance} = \\text{Total Earth Orbits} \\times 792,000 \, \\text{km} $$
      </p>
      </span>
      <p>To find the total number of Earth orbits since your birth, we can use:</p>
     <span style="color: #ff0040; font-size: 13px; font-weight: bold">
      <p>
      $$ \\text{Total Earth Orbits} = \\frac{\\text{Total days you have lived}}{365.25} $$
      </p>
      </span>
      <p>Where Total Days Lived is calculated from your birth date to the current date. The Sun is located about 26,000 light-years from the galactic center and takes approximately 225-250 million years to complete one full orbit, a journey known as a galactic year. As the Sun moves through space, it also carries the entire solar system along with it, contributing to the vast distances traveled over astronomical time scales.</p>
    </span>
  </span>
`;
  const distanceTowardsGreatAttractor = totalEarthOrbitsCount * 2.2e21;
  const formattedDistanceTowardsGreatAttractor = `<span style="color: red; font-weight: bold;">${distanceTowardsGreatAttractor.toExponential(
    2
  )}</span>`;
  document.getElementById("distanceTowardsGreatAttractor").innerHTML = `
  You have traveled approximately ${formattedDistanceTowardsGreatAttractor} kilometers toward the Great Attractor in the universe.
  <span class="tooltip"> <i class="fa-solid fa-circle-info"></i>
    <span class="tooltiptext">
      <p>The Great Attractor is a gravitational anomaly located in the direction of the Centaurus constellation, approximately 150-250 million light-years away. It is a region of space with a significant concentration of mass, influencing the motion of galaxies, including our own Milky Way.</p>
      <p>The distance you have traveled toward the Great Attractor can be calculated using the following formula:</p>
      <span style="color: #ff0040; font-size: 13px; font-weight: bold">
      <p>
      $$ \\text{Total Distance Towards Great Attractor} $$
      $$ = \\text{Total Earth Orbits} \\times 2.2 \\times 10^{21} \, \\text{km} $$
      </p>
      </span>
      <p>Where Total Earth Orbits is calculated as:</p>
      <span style="color: #ff0040; font-size: 13px; font-weight: bold">
      <p>
      $$ \\text{Total Earth Orbits} = \\frac{\\text{Total days you have lived}}{365.25} $$
      </p>
      </span>
      <p>The observed movement of our galaxy and others in its vicinity is directed toward this region, which plays a key role in the large-scale structure of the universe. This distance represents your hypothetical travel toward this massive cosmic entity over astronomical timescales.</p>
    </span>
  </span>
`;
  const halleyCometYears = [
    66, 141, 218, 295, 374, 451, 530, 607, 684, 760, 837, 912, 989, 1066, 1145,
    1222, 1301, 1378, 1456, 1531, 1607, 1682, 1759, 1835, 1910, 1986, 2061,
    2134, 2209, 2284,
  ];
  const cometPassesWithinLifetime = halleyCometYears.filter(
    (year) => year >= birthYear && year <= currentYear
  );
  const halleyCometPasses = cometPassesWithinLifetime.length;
  const formattedHalleyCometPasses = `<span style="color: red; font-weight: bold;">${halleyCometPasses}</span>`;
  const formattedHalleyCometYears = `<span style="color: #fff;">${cometPassesWithinLifetime.join(
    ", "
  )}</span>`;
  document.getElementById("halleyCometInfo").innerHTML = `
  Halley's Comet passed during your lifetime in the following years: ${formattedHalleyCometYears}<br>
  Total passes: ${formattedHalleyCometPasses}`;
  document.getElementById(
    "birthDay"
  ).innerHTML = `You were born on ${formattedBirthDay}.`;
  document.getElementById(
    "nextBirthday"
  ).innerHTML = `You are ${formattedDaysUntilNextBirthday} days away from your next birthday which falls on ${formattedNextBirthdayDay}. 🎉`;
  document.getElementById("totalCandlesCount").innerHTML = `
  The total number of candles on all your birthday cakes so far is ${formattedTotalCandlesCount}.
  <span class="tooltip"> <i class="fa-solid fa-circle-info"></i>
    <span class="tooltiptext">
      <p>The total number of candles on your birthday cakes increases each year, starting with 1 candle on your first birthday, 2 candles on your second, and so on, up to your current age. This pattern forms an arithmetic series.</p>
      <span style="color: #ff0040; font-size: 13px; font-weight: bold;">
        $$ \\text{Total Candles} = 1 + 2 + 3 + ... + \\text{Age} $$
      </span>
      <p>We can find the total number of candles you've blown out so far using this formula:</p>
      <span style="color: #ff0040; font-size: 13px; font-weight: bold;">
        $$ \\text{Total Candles} = \\frac{\\text{Age} \\times (\\text{Age} + 1)}{2} $$
<pre style="border: 1px solid rgba(241, 6, 6, 0.81); background-color: rgba(13, 1, 0, 0.95); border-radius: 2px; padding: 10px; font-family: 'Courier New', Courier, monospace; color: green; font-size: 15px; text-align: left; overflow-x: auto;">
  let totalCandlesCount = 0;
  for (let i = 1; i <= currentYear - birthYear; i++) {
    totalCandlesCount += i;
  }
  const TotalCandlesCount = ${totalCandlesCount}
      </pre>
      </span>
    </span>
  </span>
`;
  MathJax.typeset();
  document.getElementById("totalHeartBeatsCount").innerHTML = `
  Your heart has beaten approximately ${formattedTotalHeartBeatsCount} times since you were born.
  <span class="tooltip"> <i class="fa-solid fa-circle-info"></i>
    <span class="tooltiptext"><span style="color: #ff0040; font-size: 1.1em; font-weight: bold">[Assuming 60 beats per minute on average]</span><br>This estimate is based on an average resting heart rate of 60 beats per minute, which is a typical value for adults. This rate can vary depending on factors such as age, fitness level, and overall health. If we assume this average rate has been consistent throughout your lifetime, this gives a rough estimate of the total number of heartbeats.</span>
  </span>
`;
  document.getElementById("totalBreathsCount").innerHTML = `
  You have taken approximately ${formattedTotalBreathsCount} breaths since you were born.
  <span class="tooltip"> <i class="fa-solid fa-circle-info"></i>
    <span class="tooltiptext"><span style="color: #ff0040; font-size: 1.1em; font-weight: bold">[Assuming 16 breaths per minute on average]</span><br>This estimate is based on an average breathing rate of 16 breaths per minute, which is typical for a resting adult. This rate can fluctuate based on various factors, including activity level, age, health conditions, and emotional state. Assuming this average has remained consistent throughout your life provides a rough calculation of your total breaths taken.</span>
  </span>
`;
  let leapYearsInfo;
  if (leapYearsCount === 0) {
    leapYearsInfo = `You have not experienced any leap years. ༎ຶ﹏༎ຶ`;
  } else {
    leapYearsInfo = `
  You have lived through <span style="color: red; font-weight: bold;">${leapYearsCount}</span> leap years (${formattedLeapYears}).
  <span class="tooltip"> <i class="fa-solid fa-circle-info"></i>
    <span class="tooltiptext">
      <span style="color: #ff0040; font-size: 1.2em; font-weight: bold">Leap Year (অধিবর্ষ)</span><br>
      A leap year occurs every four years to help synchronize the calendar year with the astronomical year. Specifically, it accounts for the fact that a complete orbit of the Earth around the Sun takes approximately 365.24 days. To compensate for this extra time, an additional day, February 29, is added to the calendar in leap years. This system ensures that our calendar remains aligned with the Earth's position in relation to the Sun over the long term.
  </span>
`;
    MathJax.typeset();
  }
  document.getElementById(
    "totalLeapYears"
  ).innerHTML = `<span>${leapYearsInfo}</span>`;
  let halleyCometInfo;
  if (halleyCometPasses === 0) {
    halleyCometInfo = `Halley's Comet has not passed by Earth during your lifetime. ༎ຶ﹏༎ຶ 
    <span class="tooltip"> <i class="fa-solid fa-circle-info"></i>
      <span class="tooltiptext"><span style="color: #ff0040; font-size: 1.2em; font-weight: bold">Halley's Comet (হ্যালির ধূমকেতু)</span><br>Halley's Comet, officially known as 1P/Halley, is one of the most renowned comets in our solar system, famous for its periodic appearances approximately every 76 years. Named after astronomer Edmond Halley, who predicted its return in 1705, the comet has been observed for centuries, with records dating back to 240 BC. Its nucleus, composed of ice and dust, produces a bright coma and two tails—one made of gas and the other of dust—when it approaches the Sun. Halley's Comet last appeared in 1986 and is expected to return in 2061, continuing to captivate skywatchers around the world.</span>`;
  } else {
    halleyCometInfo = `Halley's Comet has passed by Earth ${formattedHalleyCometPasses} times during your lifetime`;
    if (halleyCometPasses > 0) {
      halleyCometInfo += ` (${formattedHalleyCometYears}).
      <span class="tooltip">
    <i class="fa-solid fa-circle-info"></i>
    <span class="tooltiptext">
      <span style="color: #ff0040; font-size: 1.2em; font-weight: bold">Halley's Comet (হ্যালির ধূমকেতু)</span><br>
      Halley's Comet, officially known as 1P/Halley, is one of the most renowned comets in our solar system, famous for its periodic appearances approximately every 76 years. Named after astronomer Edmond Halley, who predicted its return in 1705, the comet has been observed for centuries, with records dating back to 240 BC. Its nucleus, composed of ice and dust, produces a bright coma and two tails—one made of gas and the other of dust—when it approaches the Sun. Halley's Comet last appeared in 1986 and is expected to return in 2061, continuing to captivate skywatchers around the world.
    </span>
  </span>
      `;
    }
    halleyCometInfo += "";
  }
  document.getElementById(
    "halleyCometInfo"
  ).innerHTML = `<span>${halleyCometInfo}</span>`;
}
function getGeneration(birthYear) {
  let generation = "";
  if (birthYear >= 2013) {
    generation = "Gen Alpha";
  } else if (birthYear >= 1997) {
    generation = "Gen Z";
  } else if (birthYear >= 1981) {
    generation = "Millennial (Gen Y)";
  } else if (birthYear >= 1965) {
    generation = "Gen X)";
  } else if (birthYear >= 1946) {
    generation = "Baby Boomer";
  } else if (birthYear >= 1928) {
    generation = "Gen Silent";
  } else if (birthYear >= 1901) {
    generation = "Greatest Generation";
  } else {
    generation = "Unknown";
  }
  document.getElementById(
    "userGeneration"
  ).innerHTML = `You belong to the generation --> <span style="color: red; font-weight: bold;">${generation}</span> ! <span class="tooltip-zodiac"> <i class="fa-solid fa-circle-info"></i>
  <span class="tooltiptext-zodiac">
    <span style="color: #ff0040; font-size: 1.1em; font-weight: bold">Generations (প্রজন্ম)</span><br>
    <div style="font-size: 13px; font-weight: normal; line-height: 1.5; margin: 0; text-align: left;">
        Generations refer to groups of people born around the same time, who experience similar cultural events and social changes. Each generation has distinct characteristics shaped by the historical context in which they grew up. Here are the key generations and their time frames:<br>
        01. <span style="color: #ff0040; font-weight: bold;">Generation Alpha (জেনারেশন আলফা)</span> (2013 - 2025)<br>
        02. <span style="color: #ff0040; font-weight: bold;">Generation Z (জেনারেশন জি)</span> (1997 - 2012)<br>
        03. <span style="color: #ff0040; font-weight: bold;">Millennials (মিলেনিয়াল) / Generation Y</span> (1981 - 1996)<br>
        04. <span style="color: #ff0040; font-weight: bold;">Generation X (জেনারেশন এক্স)</span> (1965 - 1980)<br>
        05. <span style="color: #ff0040; font-weight: bold;">Baby Boomers (বেবি বুমার)</span> (1946 - 1964)<br>
        06. <span style="color: #ff0040; font-weight: bold;">Silent Generation (নীরব প্রজন্ম)</span> (1928 - 1945)<br>
        07. <span style="color: #ff0040; font-weight: bold;">Greatest Generation (শ্রেষ্ঠ প্রজন্ম)</span> (1901 - 1927)<br>
        Each generation experiences unique societal shifts, technological advancements, and cultural movements that shape their values, attitudes, and behaviors. Understanding these generational traits can provide insights into their perspectives and interactions with the world.
    </div>
</span>
`;
}

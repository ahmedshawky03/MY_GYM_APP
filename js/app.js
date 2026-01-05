// Navigation
function openCategory(cat) {
  localStorage.setItem("cat", cat);
  window.location.href = "videos.html";
}

function goHome() {
  window.location.href = "index.html";
}

// Light / Dark Mode
function toggleMode() {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "mode",
    document.body.classList.contains("light") ? "light" : "dark"
  );
}

// Load saved mode
if (localStorage.getItem("mode") === "light") {
  document.body.classList.add("light");
}

function getEmbedLink(url) {
  if (!url) return "";

  // 1. YouTube (Convert watch link to embed)
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    let videoId = "";
    if (url.includes("youtu.be")) {
      videoId = url.split("/").pop();
    } else if (url.includes("v=")) {
      videoId = url.split("v=")[1].split("&")[0];
    } else if (url.includes("/embed/")) {
      return url; // Already correct
    }
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // 2. Facebook (Use Video Plugin)
  if (url.includes("facebook.com") || url.includes("fb.watch")) {
    // لو اللينك هو أصلاً بلاجن، رجعه زي ما هو
    if (url.includes("plugins/video.php")) return url;
    
    // تحويل اللينك العادي لصيغة الـ Embed بتاعة فيسبوك
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&t=0`;
  }

  // 3. Default (Try to use the link as is - for other sites)
  return url;
}




const videosData = {
  warming: [
    {
      muscle: "Full Warming Up",
      exercise: "Full Body Warm Up",
      sets: "3 Sets * 15 Reps ",
      embed: "https://www.facebook.com/watch/?ref=saved&v=858656203796156" 
    }
  ],

  arm: [
    {
      muscle: "Full Arm 1",
      exercise: "Full train arm",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/watch/?ref=saved&v=1466562861080051" 
    },
    {
      muscle: "Full Arm 2",
      exercise: "Full train arm",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/watch/?ref=saved&v=1158960409752576" 
    },
    {
      muscle: "Full Arm 3",
      exercise: "Full train arm",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/reel/724472527236122" 
    },
    {
      muscle: "Full Arm 4",
      exercise: "Full train arm",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/reel/693388336804244" 
    },
    {
      muscle: "Full Arm 5",
      exercise: "Full train arm",
      sets: "4 Sets * 12 Reps (Super set)",
      embed: "https://www.facebook.com/reel/1063486298537936" 
    },
    {
      muscle: "Full Arm 6",
      exercise: "Full train arm",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/reel/380877834982983" 
    },


    {
      muscle: "Biceps 1",
      exercise: "biceps workout for mass",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/reel/955183962659972" 
    },
    {
      muscle: "Biceps 2",
      exercise: "Why Your Biceps Aren’t Growing?",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/watch/?ref=saved&v=976690837992096" 
    },

    {
      muscle: "Triceps",
      exercise: "Do You Want Bigger Triceps?",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/watch/?ref=saved&v=1556005358871899" 
    },
  ],
  wrist: [
    {
        muscle: "Full Wrist Exercises",
        exercise: "Wrist Exercises for Strength and Flexibility",
        sets: "4 Sets * 12 Reps ",
        embed: "https://www.facebook.com/reel/1174622741176971"
    }
    ],


  chest: [
    {
      muscle: "Full Chest 1",
      exercise: "Full train chest and triceps workout",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/watch/?ref=saved&v=856467569269536" 
    },
    {
      muscle: "Full Chest 2",
      exercise: "Full train chest ",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/watch/?ref=saved&v=2979231452264974" 
    },
    {
      muscle: "Full Chest 3",
      exercise: "Full train chest ",
      sets: "5 Sets * 12 Reps",
      embed: "https://www.facebook.com/reel/1888000495341682" 
    },
    {
      muscle: "Full Chest 4",
      exercise: "Full train chest ",
      sets: "5 Sets * 12 Reps",
      embed: "https://www.facebook.com/reel/1225061331851844" 
    },
    {
      muscle: "Cable Chest Workout",
      exercise: " cable ",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/watch/?ref=saved&v=838600722198785" 
    },
    {
      muscle: "Butterfly Workout",
      exercise: " butterfly ",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/watch/?ref=saved&v=1876049379927072" 
    },
    
  ],
  back: [
    {
      muscle: "Full Back 1",
      exercise: "  Full train back ",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/reel/1297881555463589" 
    },
    {
      muscle: "Full Back 2",
      exercise: "  Full train back ",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/reel/2261491981031052" 
    },
    {
      muscle: "Full Back 3",
      exercise: "  Full train back ",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/reel/24887050400949757" 
    },
    {
      muscle: "Full Back 4",
      exercise: "  Full train back ",
      sets: "3 Sets * 12 Reps ((1st normal 2,3 all i can high intesity high weight))",
      embed: "https://www.facebook.com/reel/1291048095929620" 
    },
    {
      muscle: "Full Back 5",
      exercise: "  Full train back ",
      sets: "4 Sets * 12 Reps ",
      embed: "https://www.facebook.com/reel/1365902961839558" 
    },
    {
      muscle: "Full Back 6",
      exercise: "  Full train back ",
      sets: "4 Sets * 12 Reps ",
      embed: "https://www.facebook.com/reel/1596320610914970" 
    },

    {
      muscle: "Back cable pull",
      exercise: "  cable pull ",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/watch/?ref=saved&v=1799194714089399" 
    },
  ],
  chestback: [
    {
      muscle: "Chest & Back 1",
        exercise: " Full train chest & back ",
        sets: "4 Sets * 12 Reps",
        embed: "https://www.facebook.com/reel/652939910841994"
    },
    {
      muscle: "Chest & Back 2",
        exercise: " Full train chest & back ",
        sets: "4 Sets * 12 Reps",
        embed: "https://www.facebook.com/reel/792293972975490"
    },
    {
      muscle: "Chest & Back 3",
        exercise: " Full train chest & back ",
        sets: "4 Sets * 12 Reps",
        embed: "https://www.facebook.com/reel/465055705956239"
    },
  ],
  legs: [
      {
      muscle: "Full Legs 1",
      exercise: "Full train legs ",
      sets: "4 Sets * 8 Reps high weight",
      embed: "https://www.facebook.com/watch/?ref=saved&v=1074020514804352" 
    },
      {
      muscle: "Full Legs 2",
      exercise: "Full train legs ",
      sets: "4 Sets * 8 Reps high weight",
      embed: "https://www.facebook.com/reel/916426376807901" 
    },
      {
      muscle: "Full Legs 3",
      exercise: "Full train legs ",
      sets: "4 Sets * 8 Reps high weight",
      embed: "https://www.facebook.com/reel/452254390856396" 
    },

    {
      muscle: "Leg press",
      exercise: " leg press machine ",
      sets: "4 Sets * 8 Reps high weight",
      embed: "https://www.facebook.com/reel/2010404503059549" 
    },
  ],
  shoulders: [
    {
      muscle: "Full Shoulders 1 ",
      exercise: "Full train shoulder ",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/C.HaithamSalama/videos/879240037231549" 
    },
    {
      muscle: "Full Shoulders 2",
      exercise: "Full train shoulder ",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/watch/?ref=saved&v=1441860217499845"
    }, 
    {
      muscle: "Full Shoulders 3",
      exercise: "Full train shoulder ",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/reel/1807932513148137"
    }, 
    {
      muscle: "Full Shoulders 4",
      exercise: "Full train shoulder ",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/reel/1814999275961226"
    }, 
    {
      muscle: "Full Shoulders 5",
      exercise: "Full train shoulder ",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/reel/540326179119552"
    }, 
    {
      muscle: "Full Shoulders 6",
      exercise: "Full train shoulder ",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/reel/568643592738421"
    }, 
    {
      muscle: "Full Shoulders 7",
      exercise: "Full train shoulder ",
      sets: "4 Sets * 12 Reps",
      embed: "https://www.facebook.com/reel/1074343404478537"
    }, 

  ],
  abs: [
    {
      muscle: "Full Abs 1",
        exercise: "Full train abs ",
        sets: "4 Sets * 20 Reps",
        embed: "https://www.facebook.com/reel/2196968484147895"
    },
    {
      muscle: "Full Abs 2",
        exercise: "Full train abs ",
        sets: "4 Sets * 20 Reps",
        embed: "https://www.facebook.com/reel/1005086168420391"
    },
    {
      muscle: "Full Abs 3",
        exercise: "Full train abs ",
        sets: "3 Sets * 15 Reps",
        embed: "https://www.facebook.com/reel/554813157574564"
    },
    {
      muscle: "Full Abs 4",
        exercise: "Full train abs ",
        sets: "3 Sets * 15 Reps",
        embed: "https://www.facebook.com/reel/966788335190249"
    },
  ],
  push: [
    {
      muscle: "Full Push (Shoulder) 1 ",
      exercise: "Full train push ",
      sets: "3 Sets * 12 Reps ((1st normal 2,3 all i can ,high intesity high weight))",
      embed: "https://www.facebook.com/reel/1157057356358453" 
    },
    {
      muscle: "Full Push 2 ",
      exercise: "Full train push ",
      sets: "3 Sets * 12 Reps ((1st normal 2,3 all i can ,high intesity high weight))",
      embed: "https://www.facebook.com/reel/2294315544418851" 
    },
    {
      muscle: "Full Push 3 ",
      exercise: "Full train push ",
      sets: "3 Sets * 12 Reps ((1st normal 2,3 all i can ,high intesity high weight))",
      embed: "https://www.facebook.com/reel/1096313512025547" 
    },
    {
      muscle: "Full Push 4 ",
      exercise: "Full train push (CABLE ONLY) ",
      sets: "3 Sets * 12 Reps ((1st normal 2,3 all i can ,high intesity high weight))",
      embed: "https://www.facebook.com/reel/1062516365849006" 
    },
    {
      muscle: "Full Push 5 ",
      exercise: "Full train push  ",
      sets: "3 Sets * 12 Reps ((1st normal 2,3 all i can ,high intesity high weight))",
      embed: "https://www.facebook.com/reel/618078327480185" 
    },
    
  ],
  pull: [
    {
      muscle: "Full Pull 1",
      exercise: "Full train pull ",
      sets: "3 Sets * 12 Reps ((1st normal 2,3 all i can ,high intesity high weight))",
      embed: "https://www.facebook.com/reel/784544784576916" 
    },
    {
      muscle: "Full Pull 2",
      exercise: "Full train pull ",
      sets: "3 Sets * 12 Reps ((1st normal 2,3 all i can ,high intesity high weight))",
      embed: "https://www.facebook.com/reel/1265610321999451" 
    },
    {
      muscle: "Full Pull 3",
      exercise: "Full train pull ",
      sets: "3 Sets * 12 Reps ((1st normal 2,3 all i can ,high intesity high weight))",
      embed: "https://www.facebook.com/reel/1439678230576991" 
    },
    {
      muscle: "Full pull 4 ",
      exercise: "Full train pull (CABLE ONLY) ",
      sets: "3 Sets * 12 Reps ((1st normal 2,3 all i can ,high intesity high weight))",
      embed: "https://www.facebook.com/reel/1210700683870865" 
    },
   
  ],
  upperbody: [
    {
      muscle: "Upper Body 1",
      exercise: "Full Body  ",
      sets: "3 Sets * 12 Reps ((1st normal 2,3 all i can ,high intesity high weight))",
      embed: "https://www.facebook.com/reel/24579622131635728" 
    },

   
  ],
  cardio: [
    {
      muscle: "Full Cardio 1",
      exercise: "Full Cardio pull ",
      sets: "4 Sets * 30 Reps ",
      embed: "https://www.facebook.com/reel/1166081522167127" 
    },

   
  ], 
    ramadan: [
    {
        muscle: "Ramadan Workout 1",
        exercise: "first & 2nd days of ramadan workout ",
        sets: "4 Sets * 12 Reps ",
        embed: "https://www.facebook.com/reel/590677010581117"
    },
    {
        muscle: "Ramadan Workout 2",
        exercise: "3rd & 4th days of ramadan workout ",
        sets: "4 Sets * 12 Reps ",
        embed: "https://www.facebook.com/reel/1263047331580271"
    },
    {
        muscle: "any week Workout",
        exercise: "all week ",
        sets: "4 Sets * 12 Reps ",
        embed: "https://www.facebook.com/reel/468752959057053"
    },

    ],



};

/* ========================= */

if (document.getElementById("videosContainer")) {
  const cat = localStorage.getItem("cat");
  if (document.getElementById("pageTitle")) {
      document.getElementById("pageTitle").innerText = cat ? cat.toUpperCase() : "VIDEOS";
  }

  if (cat && videosData[cat]) {
    videosData[cat].forEach(v => {
      const finalSrc = getEmbedLink(v.embed);

      document.getElementById("videosContainer").innerHTML += `
        <div class="video-box">
          <iframe src="${finalSrc}" allowfullscreen scrolling="no" frameborder="0"></iframe>
          <div class="video-info">
            <strong>${v.muscle}</strong><br>
            ${v.exercise}<br>
            ${v.sets}
          </div>
        </div>
      `;
    });
  }
}
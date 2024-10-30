const notification = prompt(
  ` You are waken up in the middle of the night by a notification from your phone. \n What do you do? \n (Enter the number of your choice) \n 1. Read the notification \n 2. Roll over and go back to sleep`
);
// \n isused to make a line break
if (notification === "1") {
  document.getElementById(
    "story"
  ).innerHTML += `<br>  You check the notification and see your pal Carl has texted you. "Tonight's the big night! Are you ready to rob the Hot Balloon Museum? We are gonna be rich!"`;
  // Next if statement
  const textBack = prompt(
    `You check the notification and see your pal Carl has texted you. "Tonight's the big night! Are you ready to rob the Hot Balloon Museum? We are gonna be rich!" \n How do you respond? \n(Enter the number of your choice) \n 1. Text back: "I am already on my way" \n 2. Text back: "I think I might be having second thoughts... `
  );
  if (textBack === "1") {
    document.getElementById(
      "story"
    ).innerHTML += `<br>    You are about to rush out the door when you get the sense that you are forgetting something... Oh yeah!`;
    const toolChoice = prompt(
      `You are about to rush out the door when you get the sense that you are forgetting something... Oh yeah! \n What do you go back and get? \n 1. Car Keys \n 2. Lighter \n 3. Gun`
    );
    if (toolChoice === "1") {
      const tool = "Car Keys";
      document.getElementById(
        "story"
      ).innerHTML += `<br>  You grab your car keys, hop in your car, and drive to the Hot Air Balloon Mueseum. Carl is already there when you arrive. Carl looks at you through the eye holes of his ski mask, "I'll follow your lead"`;
      const heistApproachKey = prompt(
        `You grab your car keys, hop in your car, and drive to the Hot Air Balloon Mueseum. Carl is already there when you arrive. Carl looks at you through the eye holes of his ski mask, "I'll follow your lead" \n How do you approach the Museum? \n (Enter the number of your choice) \n 1. Walk in the front door \n 2. Sneak in the back`
      );
      if (heistApproachKey === "1") {
        document.getElementById(
          "story"
        ).innerHTML += `<br>    You walk in the front door and see your target: George Washington's Personal Hot Air Balloon. Legend has it, it was used by George Washington to conduct stealth recon missions on the Royal Palace during the Revolutionary War. This could go for a pretty penny on Facebook Marketplace. You and Carl's moment of awe struck silence is inturrupted by the sound of distant police sirens. You realize that you may have set off a silent alarm!`;
        const policeAreComingCarKey = prompt(
          `You walk in the front door and see your target: George Washington's Personal Hot Air Balloon. Legend has it, it was used by George Washington to conduct stealth recon missions on the Royal Palace during the Revolutionary War. This could go for a pretty penny on Facebook Marketplace. You and Carl's moment of awe struck silence is inturrupted by the sound of distant police sirens. You realize that you may have set off a silent alarm! \n What do you do? \n 1. Try and steal the Balloon fast as possible \n 2. It's probably not for you, take your time with the heist \n 3. Hide`
        );
        if (policeAreComingCarKey === "1") {
          document.getElementById(
            "story"
          ).innerHTML += `<br>  You and Carl scramble to find a way to get George Washington's Hot Air Balloon out of the museum. Your hearts drop as you realize you have no way to transport it. As you realize this, a SWAT troopers breaks down the doors on all sides, smash through all the windows, and parachute in through the giant hot air balloon sized hole in the ceiling. As you are arrested and set off to jail, you wonder if you could have done anything different to change the outcome...
            <br><br><b>Ending 1 of #</b>
            <br>Thanks for playing!
            <br>Refresh the page and make different choices to get differnent endings!`;
        } else if (policeAreComingCarKey === "2") {
          document.getElementById(
            "story"
          ).innerHTML += `<br>  You and Carl, confident you didn't do anything to alert the police, remain cool, calm, and collected. With no way to transport the Balloon on hand, you search the musuem for something to use. As you search through the janitor's closet, you find a forklift amongst the rolls of toilet paper. Before you can get use it. You hear the police sirens louder than before. They were here for you! They are in the parking lot right now! Carl, known for thinkning on his feet, tells you to put on a janitor's uniform. The SWAT teams bursts through the doors, windows, and hot air balloon sized hole in the ceileing, but all they see is two janitors. They apologize for the mess, and leave. You and Carl run back to the forklift, which somehow works with your car keys (good thing you brought them!) and you drive off into the night with the hot air balloon of your dreams. You will never have to work another day of your life.
            <br><br><b>Ending 2 of #</b>
            <br>Thanks for playing!
            <br>Refresh the page and make different choices to get differnent endings!`;
        } else {
          document.getElementById(
            "story"
          ).innerHTML += `<br>  You and Carl run and hide in two different locations. Carl hides in the basket of George Washinton's Hot Air Balloon. You hide in the janitor's closet. With the door closed you have no visual of what is going on with Carl. You can only sit helplessly as you hear the SWAT team break through the doors and windows and carry Carl away to jail. After about 5 minutes of silence, you take a peek out of the door. No one is there. As you step out, you bump into something hidden among the toilet paper. A forklift! It even has a key slot that works with your car key (good thing you remembered!). You grab the hot air balloon with the forklift and drive off into the night. <i>One Month Later.</i> You sit waiting in the visiting area of the prison, after a moment Carl, in a bright orange prison uniform, sits in the chair on the other side of the glass separator. He grabs the phone to talk to you. "Hey." You try to speak but you know if you do you will break down. Carl gives you a knowing look, "It's ok, the judge says that I could could get out of here in 5 years, 3 with good behaviour." You try to stifle your tears. "Just make me a promise... promise me when I get out of here, we are gonna go flying... maybe in a certain hot air balloon." He places his hand on the glass. You place your hand on the glass. A single tear rolls down your cheek.
            <br><br><b>Ending 3 of #</b>
            <br>Thanks for playing!
            <br>Refresh the page and make different choices to get differnent endings!`;
        }
      } else {
        document.getElementById(
          "story"
        ).innerHTML += `<br>    You decide to sneak to the back entrance of the museum only to discover that the back door is locked.`;
        const lockedBackDoorKey = prompt(
          `You sneak to the back entrance of the museum only to discover that the back door is locked. \n What do you do? \n (Enter the number of your choice) \n 1. Try to use your Car Key \n 2. Try to break in`
        );
        if (lockedBackDoorKey === "1") {
          document.getElementById(
            "story"
          ).innerHTML += `<br>  You try to use your house key to open the back door to the museum. It works! That was lucky. Now inside, you and Carl look around to try to find what you came for: George Washington's Personal Hot Air Balloon. Legend has it, George Washington used it to deliver his pen pal letters to the Pope. The problem is, despite frequenting this museum, you have never gone through the back entrance (it is usually reserved for employees). You and Carl are getting lost in the labyrinthian corrirdors of the complex. After a few minutes of wandering, you catch a glimps of a piece of paper sticking out from under some boxes. All you can see is the word "bew". Before you can say anything, Carl, famously impatient, blurts out "I have an idea".`;
          const whoTalksFirst = prompt(
            `You try to use your house key to open the back door to the museum. It works! That was lucky. Now inside, you and Carl look around to try to find what you came for: George Washington's Personal Hot Air Balloon. Legend has it, George Washington used it to deliver his pen pal letters to the Pope. The problem is, despite frequenting this museum, you have never gone through the back entrance (it is usually reserved for employees). You and Carl are getting lost in the labyrinthian corrirdors of the complex. After a few minutes of wandering, you catch a glimps of a piece of paper sticking out from under some boxes. All you can see is the word "bew". Before you can say anything, Carl, famously impatient, blurts out "I have an idea". \n What do you do? \n (Enter the number of your choice) \n 1. Ignore Carl and investigate the piece of paper. \n 2. Listen to Carl's plan. The paper probably isn't important anyway.`
          );
          if (whoTalksFirst === "1") {
            document.getElementById(
              "story"
            ).innerHTML += `<br>    Before Carl can say his idea, you walk over to the paper and pull it out from under the boxes. As you pull it out you realize it doesn't say "bew", it says "map" and the paper was just upside down. On the map you see the route to George Washington's Hot Air Balloon. There is also a side room that is called "Top Secret Hot Air Balloon Transportation Device Room". You decide that might be worth checking out, as you and Carl didn't really have a plan on how to move the balloon out of the museum. When you approach the door you see a keypad on the handle. The door is locked.`;
            const secretRoomCode = prompt(
              `Before Carl can say his idea, you walk over to the paper and pull it out from under the boxes. As you pull it out you realize it doesn't say "bew", it says "map" and the paper was just upside down. On the map you see the route to George Washington's Hot Air Balloon. There is also a side room that is called "Top Secret Hot Air Balloon Transportation Device Room". You decide that might be worth checking out, as you and Carl didn't really have a plan on how to move the balloon out of the museum. When you approach the door you see a keypad on the handle. The door is locked. \n What do you do? \n (Enter the number of your choice) \n 1. Look for clues to determine the code \n 2. Give up`
            );
            if (secretRoomCode === "1") {
              document.getElementById(
                "story"
              ).innerHTML += `<br>  You and Carl begin looking for clues about what the code could be. You see that the numbers 2, 5, and 9 are more smudged than the others; a sign of frequent presses. However, your expirience with these keypads goes beyond just today. You spent years working in a keypad factory that produced this very make and model of keypad. You know that these pads require codes with four digits. So now you have to figure out which order these number go in, as well as which one is used twice. As the permutations flood your brain, Carl punches in some numbers and the door opens! You look at him in disbelief. How did he know? "The code is on the back of the map", he says, as if he read your mind. You look down to see a note scribbled on the back, "secret code: 2959". You and Carl enter the top secret room, which turns out to be more of a garage, to find a truck that is used to transport the hot air balloons to and from the museum. You load George Washington's balloon onto the trailor and hit the road. You and Carl drive off into the night. You two have successfully pulled off the perfect crime and will never have to fly Spirit Airlines again.
                <br><br><b>Ending 4 of #</b>
            <br>Thanks for playing!
            <br>Refresh the page and make different choices to get differnent endings!`;
            } else {
              document.getElementById(
                "story"
              ).innerHTML += `<br>  You look at the keypad in utter dissapointment. So close yet so far. Carl looks at you and says, "Well, at least we tried. You thinking what I'm thinking?" <br>"Applebees?" <br>"Applebees."
                  <br><br><b>Ending 5 of #</b>
            <br>Thanks for playing!
            <br>Refresh the page and make different choices to get differnent endings!`;
            }
          } else {
            document.getElementById(
              "story"
            ).innerHTML += `<br> You disregard the paper and listen to Carl's plan. "We should find a place to hole up and sleep for the night. Then tommorow, when an employee finds us, we will be escorted out and we can just remember what route we took and retrace our steps tommorow night. I've been waiting to do this heist for a year, I can wait one more night to get it right." It is not ideal, but you can't think of a better option. You look around and find an employee break room with a couple futons. You both sleep the night away. You wake up to a sudden jolt. A security kicked the couch you are sleeping on and is standing over you with her arms crossed. "The cops are on their way." she says. You and Carl forgot one vital detail when formulating this plan: tresspassing is illegal. Carl looks at you with a dejected shrug. "I guess it's back to the mines for us."
            <br><br><b>Ending 6 of #</b>
            <br>Thanks for playing!
            <br>Refresh the page and make different choices to get differnent endings!`;
          }
        } else {
          document.getElementById(
            "story"
          ).innerHTML += `<br>You decide your only course of action is to break in. You motion for Carl to move aside and prepare yourself to charge through the door. 3. 2. 1. Charge! *thud* You fall to the ground. Your vision goes black. What feels like only a few seconds later, you wake up. You are in a hospital bed. A robot nurse is checking your vitals when it sees your eyes open. "Oh my! You are awake, I will alert the doctor immediately!". As the robot nurse hovers out of your hospital room, you feel a hand touch your shoulder. You look over to see Carl, only he looks older. "Hey pal, it's been a while." You look at the calandar on the wall; the date: Feburary 30th, 2064.
            <br><br><b>Ending 7 of #</b>
            <br>Thanks for playing!
            <br>Refresh the page and make different choices to get differnent endings!`;
        }
      }
    } else if (toolChoice === "2") {
      document.getElementById(
        "story"
      ).innerHTML += `<br>You grab your lighter and head to the mueseum. You get in your car and realize you really did forget your car keys. It's too late now, you decide to just bike to the museum. Carl is already there when you arrive. Carl looks at you through the eye holes of his ski mask, "I'll follow your lead"`;
      const heistApproachLighter = prompt(
        `You grab your lighter and head to the muesuem. You get in your car and realize you really did forget your car keys. It's too late now, you decide to just bike to the museum. Carl is already there when you arrive. Carl looks at you through the eye holes of his ski mask, "I'll follow your lead" \n How do you approach the Museum? \n (Enter the number of your choice) \n 1. Walk in the front door \n 2. Sneak in the back`
      );
      if (heistApproachLighter === "1") {
        document.getElementById(
          "story"
        ).innerHTML += `<br>You walk in the front door of the museum and see your target: George Washington's Personal Hot Air Balloon. Legend has it: just like his dentures, donkey teeth were used in the construction of the balloon. As you and Carl stand in awe of the balloon, you hear distant police sirens. You must have tripped a silent alarm.`;
        const policeAreComingLighter = prompt(
          `You walk in the front door of the museum and see your target: George Washington's Personal Hot Air Balloon. Legend has it: just like his dentures, donkey teeth were used in the construction of the balloon. As you and Carl stand in awe of the balloon, you hear distant police sirens. You must have tripped a silent alarm. \n What do you do? \n (Enter the number of your choice) \n 1. Use the lighter \n 2. Look to Carl for an idea `
        );
        if (policeAreComingLighter === "1") {
          document.getElementById(
            "story"
          ).innerHTML += `<br>You jump into the basket of George Washington's Personal Hot Air Balloon, Carl follows. You use the lighter to heat up the balloon and begin to lift off the ground. You are ascending. Luckiliy for you and Carl, there is a Hot Air Balloon sized hole in the ceiling. As you float away, a SWAT team raids the museum. A helicopter flies under you but doesn't see you. Out of the police's radar, you have time to relax. Carl finds a compartment under his seat. In it: perfectly preserved vintage wine from 1776. As you float of into the moonlight, you and Carl share a toast to a heist well done.
             <br><br><b>Ending 8 of #</b>
            <br>Thanks for playing!
            <br>Refresh the page and make different choices to get differnent endings!`;
        } else {
          document.getElementById(
            "story"
          ).innerHTML += `<br>You look to Carl to see what he think you should do. He pauses for a moment to think. Let's hide in the 'Employees Only' restroom. The cops can't go in there since they aren't employees. As you and Carl run to the employee restroom, you can't help but smirk to yourself at just how genius this plan is, you made the right call pulling Carl into this plan. You and Carl make it to the restroom, once you're inside, you press your ear to the door to try to hear what is happening on the other side. You hear a SWAT raid through the museum. An officer approaches the door and you see the handle start to wiggle. You hold your breath. Suddenly a booming voice shouts "Private!". <br>A younger, shakier voice responds, "Yes, Sarge?" <br>"Can't you read? It says 'Employee's Only', we can't go in there!" <br>"Oh... uh... sorry Sarge!" <br>"Sharpen up Private! Alright everyone, the museum is clear, must've been another false alarm. Back to base!" The SWAT team leaves. You and Carl go to exit the restroom, but when you grab the handle, your heart drops. The door is locked from the outside. You and Carl try to find a way out. You try kicking the door, picking the lock, and yelling for help but nothing works. That's when you remember a lesson you learned from Disney Pixar's Finding Nemo; all drains lead to the ocean. You relay this to Carl, you both recognize that there is no other option and decide to flush yourselves down the toilet. You step in the bowl. 3. 2. 1. <i>Flush!</i> The twisting and turning tubes of the sewers make take you far away from the museum. About a minute later you are shot out of a drain into the ocean. Carl shoots out right after you. As you and Carl swim to shore, you think about how the night could have gone differently...
           <br><br><b>Ending 9 of #</b>
            <br>Thanks for playing!
            <br>Refresh the page and make different choices to get differnent endings!`;
        }
      } else {
        document.getElementById(
          "story"
        ).innerHTML += `<br> You decide to sneak to the back entrance of the museum only to discover that the back door is locked.`;
        const lockedBackDoorLighter = prompt(
          `You sneak to the back entrance of the museum only to discover that the back door is locked. \n What do you do? \n(Enter the number of your choice) \n 1. Try to use the lighter \n 2. Look to Carl for an idea`
        );
        if (lockedBackDoorLighter === "1") {
          document.getElementById(
            "story"
          ).innerHTML += `<br>Oh yeah! You brought a lighter. You decide to try and melt the door to get through. You open your lighter and hold it up to the door. Nothing happens at first, but you know that good things come to those who wait. About an hour later, the metal of the door glows a dim orange. Progress. You persist. Another hour goes by and the door is even more red hot now. Any minute now. Finally, after 3 hours, the lighter runs out of fuel. You look awkwardly at Carl. Carl stares back at you with disappointment in his eyes. As the sun begins to rise, you and Carl decide to just go home. Maybe next time...
            <br><br><b>Ending 10 of #</b>
            <br>Thanks for playing!
            <br>Refresh the page and make different choices to get differnent endings!`;
        } else {
          document.getElementById(
            "story"
          ).innerHTML += `<br>You look to Carl, reknown for his ability to get past locked doors, to see if he has a plan. He smirks and says "Follow me." He brings you to his car and motions for you to get in. You both get in and he turns on his car and revs the engine. "We're getting in there one way or another." He puts the pedal to the metal and zooms towards the museum back entrance. <i>Crash! Bang! Boom!</i> You break through the door, and multiple rooms in the museum. You burst into the main area of the museum, the location of your target is sitting; George Washington's Personal Hot Air Balloon. Legend has it, construction of the Washington Monument was delayed to 149 years after Washington's death so that it would not accidently pop the balloon on one of Washington's frequent floats. The problem is, that preservation may have been for naught, as the breaks of the car refuse to activate. Carl's car slams into the Hot Air Balloon, destroying both the car and the balloon. Carl jumps out of the car. He looks at the debris. "This can't be for nothing" he mutters under his breath. "Hey! What are you still doing in the car?" He shouts. "Get out here and grab some of these balloon pieces!" You each grab as much as you can carry and run away. You may not have got all you came for, but you remeber some wise words you heard many years before: "You get what you get and you don't throw a fit".
          <br><br><b>Ending 11 of #</b>
            <br>Thanks for playing!
            <br>Refresh the page and make different choices to get differnent endings`;
        }
      }
    } else {
      document.getElementById(
        "story"
      ).innerHTML += `<br>You grab your gun and head to the mueseum. You get in your car and realize you really did forget your car keys. It's too late now, you decide to just bike to the museum.`;
      const heistApproachGun = prompt(
        `You grab your gun and head to the mueseum. You get in your car and realize you really did forget your car keys. It's too late now, you decide to just bike to the museum. Carl is already there when you arrive. Carl looks at you through the eye holes of his ski mask, "I'll follow your lead" \n How do you approach the Museum? \n (Enter the number of your choice) \n 1. Walk in the front door \n 2. Sneak in the back`
      );
      if (heistApproachGun === "1") {
        document.getElementById(
          "story"
        ).innerHTML += `<br>You walk in the front door, but you don't get far. As soon as you pass the threshold of the museum, loud sirens go off, red lights flash, and a metal cage falls around you and Carl. "What is going on?" Carl asks. Then it hits you, you just walked in the front door of a highly secure museum with a gun in your pocket, of course they have senors for that. You show Carl the gun to explain the alarms. "What do we do now?" He asks.`;
        const lockedUpAndLoaded = prompt(
          `You walk in the front door, but you don't get far. As soon as you pass the threshold of the museum, loud sirens go off, red lights flash, and a metal cage falls around you and Carl. "What is going on?" Carl asks. Then it hits you, you just walked in the front door of a highly secure museum with a gun in your pocket, of course they have senors for that. You show Carl the gun to explain the alarms. "What do we do now?" He asks. \n What do you do? \n (Enter the number of your choice) \n 1. Lock and load, you aren't going down without a fight \n 2. Throw the gun outside of the cage and surrender`
        );
      }
    }
  }
} else {
  document.getElementById("story").innerHTML +=
    "You roll over and try fall back to sleep.";
  // next if statement
}

const notification = prompt(
  ` You are waken up in the middle of the night by a notification from your phone. \n What do you do? \n (Enter the number of your choice) \n 1. Read the notification \n 2. Roll over and go back to sleep`
);
// \n isused to make a line break
if (notification === "1") {
  document.getElementById(
    "story"
  ).innerHTML += `<br>  You check the notification and see your pal Carl has texted you. "Tonight's the big night! Are you ready to rob the Hot Air Balloon Museum? We are gonna be rich!"`;
  // Next if statement
  const textBack = prompt(
    `You check the notification and see your pal Carl has texted you. "Tonight's the big night! Are you ready to rob the Hot Air Balloon Museum? We are gonna be rich!" \n How do you respond? \n(Enter the number of your choice) \n 1. Text back: "I am already on my way" \n 2. Text back: "I think I might be having second thoughts... `
  );
  if (textBack === "1") {
    document.getElementById(
      "story"
    ).innerHTML += `<br>   You text him back letting him know you are on your way. You are about to rush out the door when you get the sense that you are forgetting something...`;
    const toolChoiceMuseum = prompt(
      `You are about to rush out the door when you get the sense that you are forgetting something... \n What do you go back and get? \n 1. Car Keys \n 2. Lighter \n 3. Gun`
    );
    if (toolChoiceMuseum === "1") {
      document.getElementById(
        "story"
      ).innerHTML += `<br>  Keys! You grab your car keys, hop in your car, and drive to the Hot Air Balloon Mueseum. Carl is already there when you arrive. Carl looks at you through the eye holes of his ski mask, "I'll follow your lead"`;
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
          ).innerHTML += `<br>  You and Carl run and hide in two different locations. Carl hides in the basket of George Washinton's Hot Air Balloon. You hide in the janitor's closet. With the door closed you have no visual of what is going on with Carl. You can only sit helplessly as you hear the SWAT team break through the doors and windows and carry Carl away to jail. After about 5 minutes of silence, you take a peek out of the door. No one is there. As you step out, you bump into something hidden among the toilet paper. A forklift! It even has a key slot that works with your car key (good thing you remembered!). You grab the hot air balloon with the forklift and drive off into the night. <br><i>One Month Later.</i> You sit waiting in the visiting area of the prison, after a moment Carl, in a bright orange prison uniform, sits in the chair on the other side of the glass separator. He grabs the phone to talk to you. "Hey." You try to speak but you know if you do you will break down. Carl gives you a knowing look, "It's ok, the judge says that I could could get out of here in 5 years, 3 with good behaviour." You try to stifle your tears. "Just make me a promise... promise me when I get out of here, we are gonna go flying... maybe in a certain hot air balloon." He places his hand on the glass. You place your hand on the glass. A single tear rolls down your cheek.
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
    } else if (toolChoiceMuseum === "2") {
      document.getElementById(
        "story"
      ).innerHTML += `<br>Lighter! You grab your lighter and head to the mueseum. You get in your car and realize you really did forget your car keys. It's too late now, you decide to just bike to the museum. Carl is already there when you arrive. Carl looks at you through the eye holes of his ski mask, "I'll follow your lead"`;
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
          ).innerHTML += `<br>You look to Carl to see what he think you should do. He pauses for a moment to think. Let's hide in the 'Employees Only' restroom. The cops can't go in there since they aren't employees. As you and Carl run to the employee restroom, you can't help but smirk to yourself at just how genius this plan is, you made the right call pulling Carl into this plan. You and Carl make it to the restroom, once you're inside, you press your ear to the door to try to hear what is happening on the other side. You hear a SWAT raid through the museum. An officer approaches the door and you see the handle start to wiggle. You hold your breath. Suddenly a booming voice shouts "Private!". <br>A younger, shakier voice responds, "Yes, Sarge?" <br>"Can't you read? It says 'Employee's Only', we can't go in there!" <br>"Oh... uh... sorry Sarge!" <br>"Sharpen up Private! Alright everyone, the museum is clear, must've been another false alarm. Back to base!" The SWAT team leaves. You think for a moment, the Sergeant's voice sounds familiar. You snap out of it, there are bigger fish to fry. You and Carl go to exit the restroom, but when you grab the handle, your heart drops. The door is locked from the outside. You and Carl try to find a way out. You try kicking the door, picking the lock, and yelling for help but nothing works. That's when you remember a lesson you learned from Disney Pixar's Finding Nemo; all drains lead to the ocean. You relay this to Carl, you both recognize that there is no other option and decide to flush yourselves down the toilet. You step in the bowl. 3. 2. 1. <i>Flush!</i> The twisting and turning tubes of the sewers make take you far away from the museum. About a minute later you are shot out of a drain into the ocean. Carl shoots out right after you. As you and Carl swim to shore, you think about how the night could have gone differently...
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
      ).innerHTML += `<br>Gun! You grab your gun and head to the mueseum. You get in your car and realize you really did forget your car keys. It's too late now, you decide to just bike to the museum.`;
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
        if (lockedUpAndLoaded === "1") {
          document.getElementById(
            "story"
          ).innerHTML += `<br>You draw your weapon and load it. You ready your aim. You are not going down without a fight. "Hey..." You hear Carl say. He slowly grabs the gun and takes it from you. "Remeber Mr. Miller told us, back in freshmen year of high school?" <br><i>Ten Years Ago</i> <br>"Alright class settle down." Mr. Miller says as he walks into class fifteen minutes later than usual. The smell of the expired coffee from the teachers lounge fills the room as he talks. "Today we are going to be discussing last week reading assinment. You should have finished the remaining chapters of All Quiet on th Western Front. Ok so first off..." Mr. Millers teaching fades out of your focus as you stare at the red stain on the wrist of his button up shirt. You can't quite make out what it is. Ketchup? Strawberry Jam? <br>"Psst!" Your train of thought is inturrupted. Carl, sitting to your left tries to get your attention. "Did you do the reading?" he whispers. You nod. You aren't normally a reader, but something about Erich Maria Remarque's writing style immersed you so deeply into the story that you could not put the book down until you finished it. "Can I see your answers to the homework then?"`;
          const letCarlCheat = prompt(
            `You draw your weapon and load it. You ready your aim. You are not going down without a fight. "Hey..." You hear Carl say. He slowly grabs the gun and takes it from you. "Remeber Mr. Miller told us, back in freshmen year of high school?" <br><i>Ten Years Ago</i> <br>"Alright class settle down." Mr. Miller says as he walks into class fifteen minutes later than usual. The smell of the expired coffee from the teachers lounge fills the room as he talks. "Today we are going to be discussing last week reading assinment. You should have finished the remaining chapters of All Quiet on th Western Front. Ok so first off..." Mr. Millers teaching fades out of your focus as you stare at the red stain on the wrist of his button up shirt. You can't quite make out what it is. Ketchup? Strawberry Jam? <br>"Psst!" Your train of thought is inturrupted. Carl, sitting to your left tries to get your attention. "Did you do the reading?" he whispers. You nod. You aren't normally a reader, but something about Erich Maria Remarque's writing style immersed you so deeply into the story that you could not put the book down until you finished it. "Can I see your answers to the homework then?" \n Do you let Carl cheat off your homework? \n(Enter the number of your choice) \n 1. Give Carl your answers \n 2. Deny Carl your answers`
          );
          if (letCarlCheat === "1") {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You try to covertly convey the correct answers to Carl. Consequently, you are caught, causing consequences. "Excuse me!" Mr. Miller exasperatingly exclaims."Exactly, what explains this excessive exchange?" Before you or Carl can somehow surmize a sort of safeguarding saying, Mr. Miller speaks "Save me your superfluous soliloquy! Suppose you students sought to stealthily source answers. So be it. Step not asunder, instead, sojourn here subsequent the lesson." <br>"What?" Carl asks. <br>"Stay after class." <br>After class is over, Mr. Miller calls you and Carl to his desk. "Listen, I understand you have a lot on your plate, but I can't let cheating slide. You both are going to have to serve a detention. I don't like doing this, but if you don't learn this lesson now, it may come back to bite you. You can go." As you and Carl head out of the classroom, heads hanging in shame, Mr. Miller calls out, "Oh yeah, and violence is bad." <br><i>Present Day</i> <br>Mr. Millers wise words echo in your mind. You put the gun down and await your arrest. When the SWAT team slams through the front door, the commaning Sergeant walks up to the cage. "Wait, I know these two..." He takes his helmet off, and you see none other than Mr. Miller.
            <br><br><b>Ending 12 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
          } else {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You remember the importance of academic integrity and deny Carl the answers. Carl tries to convice you to give you the answers. His whispering gets louder a he becomes more desperate for answers. Mr. Miller stops teaching. "Carl, are you trying to cheat off of your neighbor's homework? You know that is against the rules. See me after class." <br><i>Present Day</i> <br>You look back at Carl, you tell him you don't remember what Mr. Miller said because you didn't have to stay after class. "Oh. Well he said violence is bad." You ask him how that even came up in a discussion about cheating? "I don't remember, I guess you just had to be there. That's not the point. Put the gun away." You ponder over of you should or not, but eventually those wise words take over. You put away your gun and await your arrest. <br><i>A Few Days Later</i><br> You and Carl are sitting in your jail cell when the SWAT team sergeant comes in. He is still in full SWAT gear. He doesn't say a word, he simply unlocks the cells and leaves. Why did he free us? Who was he? You and Carl would never know. Perhaps in another life, you would.
              <br><br><b>Ending 13 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
          }
        } else {
          document.getElementById(
            "story"
          ).innerHTML += `<br>You decide that shooting your way out isn't gonna work, nor would it be the right thing to do. You toss the gun outside the cage. As it hits the ground, the gun misfires and lets out a single round. The bullet wizzes past you and Carl and hits a hidden lever on the other side of the room. The cage lifts. You and Carl are frozen for a moment, but then come back to reality. You hear sirens in the distance and decide to not take any chances and book it out of there. You leave empty-handed, but at least you are free.
            <br><br><b>Ending 14 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
        }
      } else {
        document.getElementById(
          "story"
        ).innerHTML += `<br>You sneak to the back entrance of the museum only to discover that the back door is locked.`;
        const lockedBackDoorGun = prompt(
          `You sneak to the back entrance of the museum only to discover that the back door is locked. \n What do you do? \n(Enter the number of your choice) \n 1. Try to use the gun \n 2. Look around for some way to open the door`
        );
        if (lockedBackDoorGun === "1") {
          document.getElementById(
            "story"
          ).innerHTML += `<br>You look at the door, then your gun, then back at the door, then back at your gun. You look at Carl. He shrugs. You look back at the door. You shrug. <i>Bang!</i> You shoot the door. The bullet ricochets back and hit you. You fall to the ground. Carl jumps into action, he has a reputation for being calm under pressure, and starts to drag you away from the building. He gets you back to the car and starts to drive to a hospital. "I saw that coming a mile away..." he says. You make it to the hospital and the doctors are able to patch you up. You get that feeling again that you are forgetting something.`;
          const hospitalForgetfulness = prompt(
            `You look at the door, then your gun, then back at the door, then back at your gun. You look at Carl. He shrugs. You look back at the door. You shrug. Bang! You shoot the door. The bullet ricochets back and hit you. You fall to the ground. Carl jumps into action, he has a reputation for being calm under pressure, and starts to drag you away from the building. He gets you back to the car and starts to drive to a hospital. "I saw that coming a mile away..." he says. You make it to the hospital and the doctors are able to patch you up. You get that feeling again that you are forgetting something. \n What are you forgetting? \n (Enter the number of your choice) \n 1. Nothing \n 2. You left blood at the scene of the crime`
          );
          if (hospitalForgetfulness === "1") {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You are too tired to think about it, whatever it was probably wasn't that important anyway. The next day DNA evidence links you to the scene of the crime. You are charged and convicted with Tresspassing, Attempted Burglary, Assult with a Deadly Weapon, Destruction of Property, and Improper Use of Reserved Accessible Parking. You will spend the rest of your 20's under house arrest. Carl got away with no charges.
            <br><br><b>Ending 15 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
          } else {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You remember that you bled all over he crime scene. You frantically call Carl and tell him to go back and clean it up. He goes right away. You don't hear from him again that night. The next morning, you wake up in your hospital bed to the sound of the news broadcast. "This just in. Late last night, potrolling SWAT officer Marcus Miller was investingating a suspicious scene by the world famous Hot Air Balloon Museum. It turned out to be a man by the name of Carl, whose last name has been withheld per his request. Carl was being a model citizen and was simply doing some volunteer janitorial work for the museum. Carl is quoted saying 'When I see an oppurtunity to help I jump on it.' Sergeant Miller was so inspired by this act of selflessness, that he too joined in on the cleanup effort. The Mayor has scheduled to give Carl and Sergeant Miller Keys to the City and a $25,000 cash prize." You get a notification on your phone. Carl just Venmo'd you $12,500. 
            <br><br><b>Ending 16 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
          }
        } else {
          document.getElementById(
            "story"
          ).innerHTML += `<br>You Look Around to see if you can use anything in your surroundings to open the door. You and Carl each find one thing. You find a paperclip, and Carl finds a slip of paper with the number to a locksmith on it.`;
          const clipOrSmith = prompt(
            `You Look Around to see if you can use anything in your surroundings to open the door. You and Carl each find one thing. You find a paperclip, and Carl finds a slip of paper with the number to a locksmith on it. \n Which item do you use? \n (Enter the number of your choice) \n 1. Paperclip \n 2. Locksmith`
          );
          if (clipOrSmith === "1") {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You try to use the paperclip as a lockpick. You bend the clip into the needed shape and insert it into the lock. After a few minutes of attempts, your total lack of lockpicking skill has gotten you nowhere. You know what your only option is. You look at Carl and let him know your plan. You are going to postpone the heist and take a lockpicking class. So, you do just that. You sign up for and attend a lockpicking class. About three weeks into the course, you accidently bump into a fellow classmate on the way out of the door. You both drop your books. You help eachother pick one another's items up off the floor. When you stand up you make eye contact for a little longer than normal. "Hey um... what are you doing after this?" They ask. You tell them that you are free. "Do you wanna grab a coffee?" You aren't a big coffee drinker, but you accept the offer. You meet up for coffee a few hours later and really hit it off. You ask them out for a more official date. They accept. Neither of you have ever clicked with someone else quite like this before. After a year of dating, you bring them back to the cafe from your first date. You get on one knee and ask them to be your spouse. They say yes! Later that night you call Carl to invite him to the wedding. Carl does not seem pleased. "You have lost sight of the plan. When is that lockpicking class going to end?" In all the business of life, you forgot about the heist, you tell Carl that the class ended months ago. He is not pleased. "Just because this isn't important to you, doesn't mean it's not important to me! This Hot Air Balloon Heist is all I have!" You try to calm him down but that just makes him angrier. "Have a nice life!" he shouts as he hangs up the phone. Your fiance walks in and sees you with a distraught look on your face. "Are you okay?" they ask. You reassure them that you are. "Who was that on the phone?". You tell them it was a friend from a different time, when you were a different person. Months later, the wedding has finished and the outdoor reception is going perfectly. Well... almost perfectly. Even though you haven't talked in over a year, a part of you wishes Carl was here. As you are thinking about what may have been, you see something in the sky. High above the clouds, a hot air balloon floats along the horizon.
                <br><br><b>Ending 17 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
          } else {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You take out your phone and call the number to the locksmith that Carl found. It goes straight to voicemail. "The Locksmith is currently closed. For Locksmith services, please call back during business hours. For 24/7 service, take our short 5 month class to learn lockpicking for yourself. Have a good day." And with that, any hope of opening this door disappeared. You and Carl decied to just go home. The locksmith doesn't open for hours, and that course doesn't sound life changing to say the least. On the bikeride home, you wonder what you could have done for a different outcome...
                <br><br><b>Ending 18 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
          }
        }
      }
    }
  } else {
    document.getElementById(
      "story"
    ).innerHTML += `<br>You don't know if its nerves, tiredness, or both, but you are not feeling up to going through with the heist you planned with Carl. You text back "I think I might be having second thoughts...". After a moment with no response, Carl calls you.`;
    const carlCall = prompt(
      `You don't know if its nerves, tiredness, or both, but you are not feeling up to going through with the heist you planned with Carl. You text back "I think I might be having second thoughts...". After a moment with no response, Carl calls you. \n Do you answer? \n (Enter the number of your choice) \n 1. Answer Carl's call \n 2. Decline Carl's call`
    );
    if (carlCall === "1") {
      document.getElementById(
        "story"
      ).innerHTML += `<br>You answer the call. "What do you mean you're having second thoughts'? This was your idea!" You tell him that you are unsure about going through with it. Sure, if you were actually able to pull off the heist then you'd be set for life, but there is any number of possibilities with a plan like that. Carl takes a moment, then responds, "I don't want to have this conversation over the phone. Where do you want to meet to talk about this?`;
      const meetCarl = prompt(
        `You answer the call. "What do you mean you're having second thoughts'? This was your idea!" You tell him that you are unsure about going through with it. Sure, if you were actually able to pull off the heist then you'd be set for life, but there is any number of possibilities with a plan like that. Carl takes a moment, then responds, "I don't want to have this conversation over the phone. Where do you want to meet to talk about this? \n Where do you tell Carl to meet you? \n (Enter the number of your choice) \n 1. The Cave in the Forest \n 2. The top of the Lightning Rod Factory`
      );
      if (meetCarl === "1") {
        document.getElementById(
          "story"
        ).innerHTML += `<br>You tell Carl that you will meet him by the Cave in the Forest. You are about the head out when you get the feeling that you are forgetting something...`;
        const toolChoiceCave = prompt(
          `You tell Carl that you will meet him by the Cave in the Forest. You are about the head out when you get the feeling that you are forgetting something... \n What did you forget? \n (Enter the number of your choice) \n 1. Car Keys \n 2. Lighter \n 3. Gun`
        );
        if (toolChoiceCave === "1") {
          document.getElementById(
            "story"
          ).innerHTML += `<br>Keys! You grab your car keys and drive to the cave to meet Carl. On the drive there you hear the rumbling of a storm starting to brew. When you finally get to the cave, Carl is already there. "Crazy weather, its clear skies by the museum. Speaking of... why don't you want to do this? All we have to do is steal George Washington's Personal Hot Air Balloon and we would be set for life!" He is right. Legend has it, George Washington used that balloon to set an all time altitude world record that wouldn't be broken until the invention of the elevator. However, you tell him that you don't think a life of crime is for you. He pauses and then nods with understanding. "Okay, I can respect tha-" He is cut off by a loud noise emanating from the cave.`;
          const investigateCaveKey = prompt(
            `Keys! You grab your car keys and drive to the cave to meet Carl. On the drive there you hear the rumbling of a storm starting to brew. When you finally get to the cave, Carl is already there. "Crazy weather, its clear skies by the museum. Speaking of... why don't you want to do this? All we have to do is steal George Washington's Personal Hot Air Balloon and we would be set for life!" He is right about being set for life. Legend has it, George Washington used that balloon to set an all time altitude world record that wouldn't be broken until the invention of the elevator. However, you tell him that you don't think a life of crime is for you. He pauses and then nods with understanding. "Okay, I can respect tha-" He is cut off by a loud screeching noise emanating from the cave. \nDo you investigate the cave? \(Enter the number of your choice) \n 1. Investigate the cave \n 2. Get out of there`
          );
          if (investigateCaveKey === "1") {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You, curious as to what casued that sound, walk into the cave, Carl close behind. As you enter the cave, a heavy rain falls outside. The cave noise repeats, it sounds almost like a derailed train scraping along concrete, this it's time louder, closer. You feel unequipped for this excursion, all you have on you is your car keys. Then you remember that you parked with your headlights facing the opening of the cave. Whenever you click the key fob, the headlights flash momentarily. When the screech happens again you click the key to get a glimps of light. When the lights flash on, the screech ends. Almost like it reacts to the light. The noise doesn't repeat again. You click the key. <i>Flash.</i> In the moment of light, you think you may have seen a human-like figure standing. at the end of the cave. <br>Click. <i>Flash.</i> The figure is closer. <br>Click. <i>Flash.</i> The figure is closer, but you still can't quite make out what it is.<br> Click. <br>Click. <br>Click. <br>You are out of range of your car's sensors. You hear footsteps sprinting towards you.<br> Click. <i>BANG! Flash.</i> Thud. A final flash of light appears, this time, from a single gunshot fired by Carl. "Run!" He yells. You both book it out of the cave. You both run to your cars, without another word to eachother. On the drive home, the sound of the rain falling on the car roof calms you down. You can take a breather and think about what just happened. What was that thing in the cave? Why did Carl have a gun? Should you have just done the heist? You may never know. You think about how this night may have turned out differently.
                    <br><br><b>Ending 19 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
          } else {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You have seen enough horror movies to know that you do not, under any circumstances, investigate creepy noises from dark caves. You turn around and get in your car as it begins to rain. Carl comes up to your window, "You aren't even curious what that was?" <br>"Nope." <br>"Fair enough." You go your seperate ways. When you get home, you lay back down in bed and close your eyes. As you drift off you hear the screeching sound again. You jump out of bed. This time, it was just a nightmare, but you wonder, could the fear of the unkown be worse than whatever was actually in the cave? You are plauged by nightmares of the cave for some time.
            <br><br><b>Ending 20 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
          }
        } else if (toolChoiceCave === "2") {
          document.getElementById(
            "story"
          ).innerHTML += `<br>Lighter! You grab your lighter. However, since you left your car keys, you have to bike to the cave to meet Carl. On the ride there you hear the rumbling of a storm starting to brew. When you finally get to the cave, Carl is already there. "Crazy weather, its clear skies by the museum. Speaking of... why don't you want to do this? All we have to do is steal George Washington's Personal Hot Air Balloon and we would be set for life!" He is right about being set for life. Legend has it, it is the first vehicle to ever be reffered to as Air Force One. However, you tell him that you don't think a life of crime is for you. He pauses and then nods with understanding. "Okay, I can respect tha-" He is cut off by a loud screeching noise emanating from the cave. `;
          const investigateCaveLighter = prompt(
            `Lighter! You grab your lighter. However, since you left your car keys, you have to bike to the cave to meet Carl. On the ride there you hear the rumbling of a storm starting to brew. When you finally get to the cave, Carl is already there. "Crazy weather, its clear skies by the museum. Speaking of... why don't you want to do this? All we have to do is steal George Washington's Personal Hot Air Balloon and we would be set for life!" He is right about being set for life. Legend has it, it is the first vehicle to ever be reffered to as Air Force One. However, you tell him that you don't think a life of crime is for you. He pauses and then nods with understanding. "Okay, I can respect tha-" He is cut off by a loud screeching noise emanating from the cave. \nDo you investigate the cave? \(Enter the number of your choice) \n 1. Investigate the cave \n 2. Get out of there`
          );
          if (investigateCaveLighter === "1") {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You cautiously enter the cave as a heavy rain begins to fall. Carl follows closely behind you. In regular intervals, the screech emanate again and again. As you go further down the cave, it gets louder and louder. Once it gets too dark, you take out your lighter. It illuminates the cave. You go deeper. Your light reaches the back wall of the cave, the cave turns to the left. The screeching stops. You follow the turn and see something you cannot believe. A blacksmith has set up shop in the depths of this forest cave. When he sees you he greets you warmly. "Hello, travellers! You seem to be lacking in arms. Might I intrest you in some of the finest steel this side of the river?" <br>Before you can respond Carl says "Why of course! What do you charge for your wares?" <br>"Well, truth be told, my business is struggling. Not many travellers come this way. I sometimes feel like I have to chase people down just to stop by the shop. If I do not make enough to feed my family, I am going to have to fall back on plan B, running for President. I have a guarunteed to win policy as well! I will campaign to make Feburary 31 days long! Nevermind that, here." He hands you each a sword of fine craftsmanship. "You two can offer me something better than money, word of mouth marketing! Take these swords and tell your friends where to find me! Feel free to come again!" He goes back to his work station. He brings a sword to a grindstone, causeing the screeching sound from before. You and Carl thank him for the swords and head back to your vehicles. When you get home, you examine the sword. Just seeing the glint of the moonlight on the steel inspires you. From this day forth, you will dedicate your life to the art of the blade.
                <br><br><b>Ending 21 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
          } else {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You and Carl decide that you don't want anything to do with the creepy cave noises. As you head back to your vehicles, it begins to rain. Carl, famous for his cosideration, sees that you got here on a bike and offers to drive you home so you can stay out of the rain. You accept and hop in his car. On the way back, you both get pretty hungry. Carl pulls into a Denny's. You and Carl have a long conversation about life. There is laughing, crying, and a whole roller coster of emotions. Something about the Denny's Grand Slam Breakfast just brings the best out of people. It's in this moment you realize. The real George Washington's Personal Hot Air Balloon was the friends you made along the way.
                <br><br><b>Ending 22 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
          }
        } else {
          document.getElementById(
            "story"
          ).innerHTML += `<br>Gun! You grab your gun. However, since you left your car keys, you have to bike to the cave to meet Carl. On the ride there you hear the rumbling of a storm starting to brew. When you finally get to the cave, Carl is already there. "Crazy weather, its clear skies by the museum. Speaking of... why don't you want to do this? All we have to do is steal George Washington's Personal Hot Air Balloon and we would be set for life!" He is right about being set for life. Legend has it, George Washington used blueprints made by Leonardo Da Vinci do construct it. However, you tell him that you don't think a life of crime is for you. He pauses. He eyes your pockets. "Did you bring a gun to-" He is cut off by a loud screeching noise emanating from the cave.`;
          const investigateCaveGun = prompt(
            `Gun! You grab your gun. However, since you left your car keys, you have to bike to the cave to meet Carl. On the ride there you hear the rumbling of a storm starting to brew. When you finally get to the cave, Carl is already there. "Crazy weather, its clear skies by the museum. Speaking of... why don't you want to do this? All we have to do is steal George Washington's Personal Hot Air Balloon and we would be set for life!" He is right about being set for life. Legend has it, George Washington used blueprints made by Leonardo Da Vinci do construct it. However, you tell him that you don't think a life of crime is for you. He pauses. He eyes your pockets. "Did you bring a gun to-" He is cut off by a loud screeching noise emanating from the cave. \nDo you investigate the cave? \n(Enter the number of your choice) \n 1. Investigate the cave \n 2. Get Out of there`
          );
          if (investigateCaveGun === "1") {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You and Carl walk into the cave. As you do, a heavy rain falls in the forest outside. The screeching fades in and out. Each time it comes back, it is a little louder. As you get deeper in the cave, all visibility darkens until it is pitch black. You hit a wall. You feel the wall to follow it deeper into the dark cave. As you walk, the screeching, begins to fade quieter now. You have passed the source of the noise. You try to turn around but you cannot see. You call out to Carl. No response. You hear footsteps sprinting toward you. You call out to Carl again. No response. The sprinting gets closer. You have no other choice but to run. In the dark you trip on a rock, dropping your gun. As it hits the ground, it misfires. In the flash of light you see a glimps of a figure you do not recognize. A groan echos from off the walls of the cave, whatever that figure was, got hit by the misfire. You try to find a wall to get your a sense of direction. Instead, you fall in a pit. You are stuck. All you can do now is think about how the night could have gone differently. Your body would not be found until years later. The mystery of the three skeletons in the Forest Cave would spark urban legends, conspiracy theories, and true crime podcasts for years to come.
            <br><br><b>Ending 23 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
          } else {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You don't wanna stick around and find out what made that noise. You turn around to go back to your bike when Carl stops you, "Hey, I asked you a question.", you turn around to see Carl looking at you with a serious face, his hand in his pocket. "Did you bring a gun?" You and him both draw your firearms at the same time. A heavy rain begins to fall. You ask Carl why he has a gun. "I never go to the forest without protection, wildlife is unpredictable" he says. There is a silence.The moon shines like a spotlight as the rain falls around you and Carl, you stand in a stalemate, guns drawn on eachother. `;
            const shootCarl = prompt(
              `You don't wanna stick around and find out what made that noise. You turn around to go back to your bike when Carl stops you, "Hey, I asked you a question.", you turn around to see Carl looking at you with a serious face, his hand in his pocket. "Did you bring a gun?" You and him both draw your firearms at the same time. A heavy rain begins to fall. You ask Carl why he has a gun. "I never go to the forest without protection, wildlife is unpredictable" he says. There is a silence.The moon shines like a spotlight as the rain falls around you and Carl, you stand in a stalemate, guns drawn on eachother. \n What do you do? \n(Enter the number of your answer) \n 1. Shoot Carl \n 2. Lower your weapon.`
            );
            if (shootCarl === "1") {
              document.getElementById(
                "story"
              ).innerHTML += `<br><i>Bang!</i> You fire your weapon. Carl falls to his knees. <i>Bang!</i> Carl fires his weapon. You fall to your knees. You both fall back. You look up to the moon. A single tear falls down your cheek, blending with the raindrops on your face.
                <br><br><b>Ending 24 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
            } else {
              document.getElementById(
                "story"
              ).innerHTML += `<br><i>Bang!</i> You drop your weapon. Carl drops his and says, "You know what, you're not a good friend." <br>"How could you say that I'm a great friend" you retort. <br>"If you were a good friend you would have told you had a gun" <br>"Okay one thing, you can't get mad about one thing." <br>"You only care about yourself. You bailed on the heist, you disrepected me, you pointed a gun at me and you didn't even seem sorry..." <br>You can't think of anything to say. <br>Carl continues, "Don't call me, don't come by my house, we're done." Carl walks away. You stand in the rain, in the dark, alone.
                <br><br><b>Ending 25 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
            }
          }
        }
      } else {
        document.getElementById(
          "story"
        ).innerHTML += `<br>You tell Carl to meet you at the top of the Lightning Rod Factory. You are about to leave when you get the feeling you are forgetting something...`;
        const toolChoiceLRFactory = prompt(
          `You tell Carl to meet you at the top of the Lightning Rod Factory. You are about to leave when you get the feeling you are forgetting something... \nWhat do you go back and get? \(Enter the number of your choice) \n 1. Car Keys \n 2. Lighter \n 3. Gun`
        );
        if (toolChoiceLRFactory === "1") {
          document.getElementById(
            "story"
          ).innerHTML += `<br>Keys! You grab your keys and then head to the Lightning Rod Factory. On the way there, the sky starts to rumble as a storm brews in the clouds. You wonder if you should call of the meetup due to the weather?`;
          const turnAroundKeys = prompt(
            `Keys! You grab your keys and then head to the Lightning Rod Factory. On the way there, the sky starts to rumble as a storm brews in the clouds. You wonder if you should call off the meetup due to the weather? \nWhat do you do? \n(Enter the number of your choice) \n 1. Postpone the meeting with Carl \n 2. Go to the meeting`
          );
          if (turnAroundKeys === "1") {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You realize that it's probably not the best idea to go to the Lightning Rod Factory during a thunderstorm. You take out your phone and text Carl that the meeting is being postponed. When you look up from texting, you see the road is gone. Due to your distracted driving you have driven off a cliff. <br>Don't text and drive.
                <br><br><b>Ending 26 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
          } else {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You figure that it probably won't be an issue. You arrive at the Factory. You walk inside and make your way to the elevator. You wave to Security Man Dan as you pass him. He waves back. You take the elevator to the roof. When the door opens to the roof, it has begun to rain. You see Carl waiting for you, he is leaning against one of the lightning rods. "Hey pal. So, why don't you want to do this heist? If we pull this off-" <i>CRACK! ZAP!</i> Carl is struck by lightning. You don't want to be next. You run to the elevator, the buttons are locked behind a security window. In desperation you try to use your car key. It works! You press a button and dive into the elevator. When you get to the lobby you tell Security Man Dan what happened. When you get home you crash onto your bed. You stare at the ceiling, thinking about how the night could've ended differently.
                <br><br><b>Ending 27 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
          }
        } else if (toolChoiceLRFactory === "2") {
          document.getElementById(
            "story"
          ).innerHTML += `<br>Lighter! You grab your lighter and then head to the Lightning Rod Factory. Turns out you did forget your keys, but you've made Carl wait long enough, so you just decide to bike there. On the way there, the sky starts to rumble as a storm brews in the clouds. You wonder if you should call of the meetup due to the weather?`;
          const turnAroundLighter = prompt(
            `Keys! You grab your keys and then head to the Lightning Rod Factory. Turns out you did forget your keys, but you've made Carl wait long enough, so you just decide to bike there. On the way there, the sky starts to rumble as a storm brews in the clouds. You wonder if you should call of the meetup due to the weather? \nWhat do you do? \n(Enter the number of your choice) \n 1. Postpone the meeting with Carl \n 2. Go to the meeting`
          );
          if (turnAroundLighter === "1") {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You stop biking for a minute to text Carl that you want to postpone the meeting at the Lightning Rod Factory. You turn around and begin to bike home. As it gets darker, rain begins to fall. You can't see very well so you pull out your lighter to light your way. Carl texts you back. You want to get out of the rain, so you keep going as you repond. Out of nowhere, you hit a bump. You throw both your phone and your lighter in the air. You catch them in opposite hands. You keep hitting bumps, so this keeps happening. After a bit of this you finally make it home. The next morning you wake up. You check your phone and see that you got an email from an account you've never seen before. It reads: "To the brilliant biker. Last night, I saw you biking down the road with no hands on the handlebars all while juggling fire. This is the talent we are looking for. If you are interested in becoming a BMX superstar please get back to me. -Simon Cowell". You would go on to become the Tony Hawk of BMX. You would double Michael Phelps record for Olympic medals. And you get to bring Carl along for the ride as your manager.
                <br><br><b>Ending 28 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
          } else {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You figure that it probably won't be an issue. You arrive at the Factory. You walk inside and make your way to the elevator. You wave to Security Man Dan as you pass him. He waves back. You take the elevator to the roof. When the door opens to the roof, it has begun to rain. You see Carl waiting for you, he is leaning against one of the lightning rods. "Hey pal. So, why don't you want to do this heist? If we pull this off-" <i>CRACK! ZAP!</i> Carl is struck by lightning. You don't want to be next. You run to the elevator, the buttons are locked behind a security window. You have no way to unlock it. You need to get somewhere safe to wait out the storm. Your mind is racing to figure out a solution. Then you remember the age old saying: 'Lightning doesn't strike the same place twice'. You stand over Carl's body. Now to you just have to wai- <i>CRACK! ZAP!</i> You are struck by lightning and killed instantly. That saying is a myth. 
            <br><br><b>Ending 29 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
          }
        } else {
          document.getElementById(
            "story"
          ).innerHTML += `<br>Gun! You grab your gun and then head to the Lightning Rod Factory. Turns out you did forget your keys, but you've made Carl wait long enough, so you decide to bike there. On the way there, the sky starts to rumble as a storm brews in the clouds. You wonder if you should call of the meetup due to the weather?`;
          const turnAroundGun = prompt(
            `Gun! You grab your gun and then head to the Lightning Rod Factory. Turns out you did forget your keys, but you've made Carl wait long enough, so you decide to bike there. On the way there, the sky starts to rumble as a storm brews in the clouds. You wonder if you should call of the meetup due to the weather? \nWhat do you do? \n(Enter the number of your choice) \n 1. Postpone the meeting with Carl \n 2. Go to the meeting`
          );
          if (turnAroundGun === "1") {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You decide it is a bad idea to go to the Lightning Rod Factory during a storm. You text Carl that you want to postpone, and then you head home. On the way home, it begins to rain. It get's dark and you can't see, so you pull into a gas station toseeof they sell a flash light. When you walk in, a glint of light coming from the bathrooms catches your eye. You walk over to the source of the light. You stop in front of the the restroom door. You hear shuffling in the restroom.`;
            const gasStationBathroom = prompt(
              `You decide it is a bad idea to go to the Lightning Rod Factory during a storm. You text Carl that you want to postpone, and then you head home. On the way home, it begins to rain. It get's dark and you can't see, so you pull into a gas station toseeof they sell a flash light. When you walk in, a glint of light coming from the bathrooms catches your eye. You walk over to the source of the light. You stop in front of the the restroom door. You hear shuffling in the restroom. \n Do you go inside? \n(Enter the number of your choice) \n 1. Go inside \n 2. Ignore it`
            );
            if (gasStationBathroom === "1") {
              document.getElementById(
                "story"
              ).innerHTML += `<br>You go into the bathroom and on the other side of the door is someone in a cloak. You can't see their face. They reach out their arm and dangle a locket with a watch on the end. The begin to swing the watch back and forth. You become inveloped by the watch. You feel like you can't look away.`;
              const watchStare = prompt(
                `You go into the bathroom and on the other side of the door is someone in a cloak. You can't see their face. They reach out their arm and dangle a locket with a watch on the end. The begin to swing the watch back and forth. You become inveloped by the watch. You feel like you can't look away. \n Do you try to look away? \n(Enter the number of your choice) \n 1. Look Away \n 2. Continue to look`
              );
              document.getElementById(
                "story"
              ).innerHTML += `<br>You can't look away.`;
              const watchStare2 = prompt(
                `You can't look away. \n Do you try to look away? \n(Enter the number of your choice) \n 1. Look Away \n 2. Continue to look`
              );
              document.getElementById(
                "story"
              ).innerHTML += `<br>You can't look away.`;
              const watchStare3 = prompt(
                `You can't look away. \n You can't look away? \n(Enter the number of your choice) \n 1. Look Away \n 2. Continue to look`
              );
              document.getElementById(
                "story"
              ).innerHTML += `<br>You can't look away.`;
              const watchStare5 = prompt(
                `You can't look away. \n You can't look away. \n(You can't look away) \n 1. Look Away \n 2. Continue to look`
              );
              document.getElementById(
                "story"
              ).innerHTML += `<br>You can't look away.`;
              const watchStare6 = prompt(
                `You can't look away. \n You can't look away. \n(You can't look away) \n 1. You can't look away \n 2. You can't look away`
              );
              document.getElementById(
                "story"
              ).innerHTML += `<br><i>BANG!</i> <br>You snap out of it. You gather yourself. You are holding a plastic bag in your left hand. It gets snatched by the cloaked individual. As they sprint out of the store, dollar bills spill out of the bag. You look back in front of you and see the cashier bleeding out on the floor. Then, to your horror, you see that you are the one who is holding the gun. Your gun. The sound of the rain outside begins to be drowned out by the blair of approaching sirens.
              <br><br><b>Ending 30 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
            } else {
              document.getElementById(
                "story"
              ).innerHTML += `<br>Despite your curiosity, you aren't one to go snooping around a gas station bathroom, especially while it's occupied. You find and purchase a flashlight, an then you head home. When you get home, you put your gun back, and lay down to go back to sleep. The next day the birds chirp, the sun shines, and life continues as normal. You played it safe at every turn, and so safe you are. Nothing ventured, nothing gained.
                <br><br><b>Ending 31 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
            }
          } else {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You figure that it probably won't be an issue. You arrive at the Factory. You walk inside and make your way to the elevator. You wave to Security Man Dan as you pass him. He looks up to wave back when he sees the gun in your pocket. He jumps over his desk and tackles you to the ground. He handcuffs you and holds you in place. "We got a 23-19!" he yells into a walkie talkie, "You're going down town!" <br><i>One Week Later</i> <br>You walk into the visitors area of the jail you are in as you await trial. You take a seat and wait for Carl to show up. After a few minutes, a police officer walks up to you and tells you bad news. "Unfortunately, your friend won't be visiting today. The same day you were arrested, he was found dead on the roof of the Lightning Rod Factory. He was struck by lightning." Weeks later, at your trial, you are aquitted of your charges since you didn't actually do anything illegal. Once you are set free, you think about what could have gone differently.
            <br><br><b>Ending 32 of #</b>
              <br>Thanks for playing!
              <br>Refresh the page and make different choices to get differnent endings`;
          }
        }
      }
    } else {
      document.getElementById(
        "story"
      ).innerHTML += `<br>You decline the call. Carl texts you "I'm doing this. You can join me, but if you don't want this heist to happen, you're gonna have to stop me. I am not going to read any more texts. It's now or never."`;
      const nowOrNever = prompt(
        `You decline the call. Carl texts you "I'm doing this. You can join me, but if you don't want this heist to happen, you're gonna have to stop me. I am not going to read any more texts. It's now or never." \n What do you do? \n 1. Join him \n 2. Stop him`
      );
      if (nowOrNever === "1") {
        document.getElementById(
          "story"
        ).innerHTML += `You decide to go through with the heist. As you head out of the door, you get the sense that you are forgetting something...`;
        const toolChoiceMuseum = prompt(
          `You decide to go through with the heist. As you head out of the door, you get the sense that you are forgetting something... \n What do you go back and get? \n 1. Car Keys \n 2. Lighter \n 3. Gun`
        );
        if (toolChoiceMuseum === "1") {
          document.getElementById(
            "story"
          ).innerHTML += `<br>  Keys! You grab your car keys, hop in your car, and drive to the Hot Air Balloon Mueseum. Carl is already there when you arrive. Carl looks at you through the eye holes of his ski mask, "I'll follow your lead"`;
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
              ).innerHTML += `<br>  You and Carl run and hide in two different locations. Carl hides in the basket of George Washinton's Hot Air Balloon. You hide in the janitor's closet. With the door closed you have no visual of what is going on with Carl. You can only sit helplessly as you hear the SWAT team break through the doors and windows and carry Carl away to jail. After about 5 minutes of silence, you take a peek out of the door. No one is there. As you step out, you bump into something hidden among the toilet paper. A forklift! It even has a key slot that works with your car key (good thing you remembered!). You grab the hot air balloon with the forklift and drive off into the night. <br><i>One Month Later.</i> You sit waiting in the visiting area of the prison, after a moment Carl, in a bright orange prison uniform, sits in the chair on the other side of the glass separator. He grabs the phone to talk to you. "Hey." You try to speak but you know if you do you will break down. Carl gives you a knowing look, "It's ok, the judge says that I could could get out of here in 5 years, 3 with good behaviour." You try to stifle your tears. "Just make me a promise... promise me when I get out of here, we are gonna go flying... maybe in a certain hot air balloon." He places his hand on the glass. You place your hand on the glass. A single tear rolls down your cheek.
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
        } else if (toolChoiceMuseum === "2") {
          document.getElementById(
            "story"
          ).innerHTML += `<br>Lighter! You grab your lighter and head to the mueseum. You get in your car and realize you really did forget your car keys. It's too late now, you decide to just bike to the museum. Carl is already there when you arrive. Carl looks at you through the eye holes of his ski mask, "I'll follow your lead"`;
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
              ).innerHTML += `<br>You look to Carl to see what he think you should do. He pauses for a moment to think. Let's hide in the 'Employees Only' restroom. The cops can't go in there since they aren't employees. As you and Carl run to the employee restroom, you can't help but smirk to yourself at just how genius this plan is, you made the right call pulling Carl into this plan. You and Carl make it to the restroom, once you're inside, you press your ear to the door to try to hear what is happening on the other side. You hear a SWAT raid through the museum. An officer approaches the door and you see the handle start to wiggle. You hold your breath. Suddenly a booming voice shouts "Private!". <br>A younger, shakier voice responds, "Yes, Sarge?" <br>"Can't you read? It says 'Employee's Only', we can't go in there!" <br>"Oh... uh... sorry Sarge!" <br>"Sharpen up Private! Alright everyone, the museum is clear, must've been another false alarm. Back to base!" The SWAT team leaves. You think for a moment, the Sergeant's voice sounds familiar. You snap out of it, there are bigger fish to fry. You and Carl go to exit the restroom, but when you grab the handle, your heart drops. The door is locked from the outside. You and Carl try to find a way out. You try kicking the door, picking the lock, and yelling for help but nothing works. That's when you remember a lesson you learned from Disney Pixar's Finding Nemo; all drains lead to the ocean. You relay this to Carl, you both recognize that there is no other option and decide to flush yourselves down the toilet. You step in the bowl. 3. 2. 1. <i>Flush!</i> The twisting and turning tubes of the sewers make take you far away from the museum. About a minute later you are shot out of a drain into the ocean. Carl shoots out right after you. As you and Carl swim to shore, you think about how the night could have gone differently...
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
          ).innerHTML += `<br>Gun! You grab your gun and head to the mueseum. You get in your car and realize you really did forget your car keys. It's too late now, you decide to just bike to the museum.`;
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
            if (lockedUpAndLoaded === "1") {
              document.getElementById(
                "story"
              ).innerHTML += `<br>You draw your weapon and load it. You ready your aim. You are not going down without a fight. "Hey..." You hear Carl say. He slowly grabs the gun and takes it from you. "Remeber Mr. Miller told us, back in freshmen year of high school?" <br><i>Ten Years Ago</i> <br>"Alright class settle down." Mr. Miller says as he walks into class fifteen minutes later than usual. The smell of the expired coffee from the teachers lounge fills the room as he talks. "Today we are going to be discussing last week reading assinment. You should have finished the remaining chapters of All Quiet on th Western Front. Ok so first off..." Mr. Millers teaching fades out of your focus as you stare at the red stain on the wrist of his button up shirt. You can't quite make out what it is. Ketchup? Strawberry Jam? <br>"Psst!" Your train of thought is inturrupted. Carl, sitting to your left tries to get your attention. "Did you do the reading?" he whispers. You nod. You aren't normally a reader, but something about Erich Maria Remarque's writing style immersed you so deeply into the story that you could not put the book down until you finished it. "Can I see your answers to the homework then?"`;
              const letCarlCheat = prompt(
                `You draw your weapon and load it. You ready your aim. You are not going down without a fight. "Hey..." You hear Carl say. He slowly grabs the gun and takes it from you. "Remeber Mr. Miller told us, back in freshmen year of high school?" <br><i>Ten Years Ago</i> <br>"Alright class settle down." Mr. Miller says as he walks into class fifteen minutes later than usual. The smell of the expired coffee from the teachers lounge fills the room as he talks. "Today we are going to be discussing last week reading assinment. You should have finished the remaining chapters of All Quiet on th Western Front. Ok so first off..." Mr. Millers teaching fades out of your focus as you stare at the red stain on the wrist of his button up shirt. You can't quite make out what it is. Ketchup? Strawberry Jam? <br>"Psst!" Your train of thought is inturrupted. Carl, sitting to your left tries to get your attention. "Did you do the reading?" he whispers. You nod. You aren't normally a reader, but something about Erich Maria Remarque's writing style immersed you so deeply into the story that you could not put the book down until you finished it. "Can I see your answers to the homework then?" \n Do you let Carl cheat off your homework? \n(Enter the number of your choice) \n 1. Give Carl your answers \n 2. Deny Carl your answers`
              );
              if (letCarlCheat === "1") {
                document.getElementById(
                  "story"
                ).innerHTML += `<br>You try to covertly convey the correct answers to Carl. Consequently, you are caught, causing consequences. "Excuse me!" Mr. Miller exasperatingly exclaims."Exactly, what explains this excessive exchange?" Before you or Carl can somehow surmize a sort of safeguarding saying, Mr. Miller speaks "Save me your superfluous soliloquy! Suppose you students sought to stealthily source answers. So be it. Step not asunder, instead, sojourn here subsequent the lesson." <br>"What?" Carl asks. <br>"Stay after class." <br>After class is over, Mr. Miller calls you and Carl to his desk. "Listen, I understand you have a lot on your plate, but I can't let cheating slide. You both are going to have to serve a detention. I don't like doing this, but if you don't learn this lesson now, it may come back to bite you. You can go." As you and Carl head out of the classroom, heads hanging in shame, Mr. Miller calls out, "Oh yeah, and violence is bad." <br><i>Present Day</i> <br>Mr. Millers wise words echo in your mind. You put the gun down and await your arrest. When the SWAT team slams through the front door, the commaning Sergeant walks up to the cage. "Wait, I know these two..." He takes his helmet off, and you see none other than Mr. Miller.
                      <br><br><b>Ending 12 of #</b>
                        <br>Thanks for playing!
                        <br>Refresh the page and make different choices to get differnent endings`;
              } else {
                document.getElementById(
                  "story"
                ).innerHTML += `<br>You remember the importance of academic integrity and deny Carl the answers. Carl tries to convice you to give you the answers. His whispering gets louder a he becomes more desperate for answers. Mr. Miller stops teaching. "Carl, are you trying to cheat off of your neighbor's homework? You know that is against the rules. See me after class." <br><i>Present Day</i> <br>You look back at Carl, you tell him you don't remember what Mr. Miller said because you didn't have to stay after class. "Oh. Well he said violence is bad." You ask him how that even came up in a discussion about cheating? "I don't remember, I guess you just had to be there. That's not the point. Put the gun away." You ponder over of you should or not, but eventually those wise words take over. You put away your gun and await your arrest. <br><i>A Few Days Later</i><br> You and Carl are sitting in your jail cell when the SWAT team sergeant comes in. He is still in full SWAT gear. He doesn't say a word, he simply unlocks the cells and leaves. Why did he free us? Who was he? You and Carl would never know. Perhaps in another life, you would.
                        <br><br><b>Ending 13 of #</b>
                        <br>Thanks for playing!
                        <br>Refresh the page and make different choices to get differnent endings`;
              }
            } else {
              document.getElementById(
                "story"
              ).innerHTML += `<br>You decide that shooting your way out isn't gonna work, nor would it be the right thing to do. You toss the gun outside the cage. As it hits the ground, the gun misfires and lets out a single round. The bullet wizzes past you and Carl and hits a hidden lever on the other side of the room. The cage lifts. You and Carl are frozen for a moment, but then come back to reality. You hear sirens in the distance and decide to not take any chances and book it out of there. You leave empty-handed, but at least you are free.
                      <br><br><b>Ending 14 of #</b>
                        <br>Thanks for playing!
                        <br>Refresh the page and make different choices to get differnent endings`;
            }
          } else {
            document.getElementById(
              "story"
            ).innerHTML += `<br>You sneak to the back entrance of the museum only to discover that the back door is locked.`;
            const lockedBackDoorGun = prompt(
              `You sneak to the back entrance of the museum only to discover that the back door is locked. \n What do you do? \n(Enter the number of your choice) \n 1. Try to use the gun \n 2. Look around for some way to open the door`
            );
            if (lockedBackDoorGun === "1") {
              document.getElementById(
                "story"
              ).innerHTML += `<br>You look at the door, then your gun, then back at the door, then back at your gun. You look at Carl. He shrugs. You look back at the door. You shrug. <i>Bang!</i> You shoot the door. The bullet ricochets back and hit you. You fall to the ground. Carl jumps into action, he has a reputation for being calm under pressure, and starts to drag you away from the building. He gets you back to the car and starts to drive to a hospital. "I saw that coming a mile away..." he says. You make it to the hospital and the doctors are able to patch you up. You get that feeling again that you are forgetting something.`;
              const hospitalForgetfulness = prompt(
                `You look at the door, then your gun, then back at the door, then back at your gun. You look at Carl. He shrugs. You look back at the door. You shrug. Bang! You shoot the door. The bullet ricochets back and hit you. You fall to the ground. Carl jumps into action, he has a reputation for being calm under pressure, and starts to drag you away from the building. He gets you back to the car and starts to drive to a hospital. "I saw that coming a mile away..." he says. You make it to the hospital and the doctors are able to patch you up. You get that feeling again that you are forgetting something. \n What are you forgetting? \n (Enter the number of your choice) \n 1. Nothing \n 2. You left blood at the scene of the crime`
              );
              if (hospitalForgetfulness === "1") {
                document.getElementById(
                  "story"
                ).innerHTML += `<br>You are too tired to think about it, whatever it was probably wasn't that important anyway. The next day DNA evidence links you to the scene of the crime. You are charged and convicted with Tresspassing, Attempted Burglary, Assult with a Deadly Weapon, Destruction of Property, and Improper Use of Reserved Accessible Parking. You will spend the rest of your 20's under house arrest. Carl got away with no charges.
                      <br><br><b>Ending 15 of #</b>
                        <br>Thanks for playing!
                        <br>Refresh the page and make different choices to get differnent endings`;
              } else {
                document.getElementById(
                  "story"
                ).innerHTML += `<br>You remember that you bled all over he crime scene. You frantically call Carl and tell him to go back and clean it up. He goes right away. You don't hear from him again that night. The next morning, you wake up in your hospital bed to the sound of the news broadcast. "This just in. Late last night, potrolling SWAT officer Marcus Miller was investingating a suspicious scene by the world famous Hot Air Balloon Museum. It turned out to be a man by the name of Carl, whose last name has been withheld per his request. Carl was being a model citizen and was simply doing some volunteer janitorial work for the museum. Carl is quoted saying 'When I see an oppurtunity to help I jump on it.' Sergeant Miller was so inspired by this act of selflessness, that he too joined in on the cleanup effort. The Mayor has scheduled to give Carl and Sergeant Miller Keys to the City and a $25,000 cash prize." You get a notification on your phone. Carl just Venmo'd you $12,500. 
                      <br><br><b>Ending 16 of #</b>
                        <br>Thanks for playing!
                        <br>Refresh the page and make different choices to get differnent endings`;
              }
            } else {
              document.getElementById(
                "story"
              ).innerHTML += `<br>You Look Around to see if you can use anything in your surroundings to open the door. You and Carl each find one thing. You find a paperclip, and Carl finds a slip of paper with the number to a locksmith on it.`;
              const clipOrSmith = prompt(
                `You Look Around to see if you can use anything in your surroundings to open the door. You and Carl each find one thing. You find a paperclip, and Carl finds a slip of paper with the number to a locksmith on it. \n Which item do you use? \n (Enter the number of your choice) \n 1. Paperclip \n 2. Locksmith`
              );
              if (clipOrSmith === "1") {
                document.getElementById(
                  "story"
                ).innerHTML += `<br>You try to use the paperclip as a lockpick. You bend the clip into the needed shape and insert it into the lock. After a few minutes of attempts, your total lack of lockpicking skill has gotten you nowhere. You know what your only option is. You look at Carl and let him know your plan. You are going to postpone the heist and take a lockpicking class. So, you do just that. You sign up for and attend a lockpicking class. About three weeks into the course, you accidently bump into a fellow classmate on the way out of the door. You both drop your books. You help eachother pick one another's items up off the floor. When you stand up you make eye contact for a little longer than normal. "Hey um... what are you doing after this?" They ask. You tell them that you are free. "Do you wanna grab a coffee?" You aren't a big coffee drinker, but you accept the offer. You meet up for coffee a few hours later and really hit it off. You ask them out for a more official date. They accept. Neither of you have ever clicked with someone else quite like this before. After a year of dating, you bring them back to the cafe from your first date. You get on one knee and ask them to be your spouse. They say yes! Later that night you call Carl to invite him to the wedding. Carl does not seem pleased. "You have lost sight of the plan. When is that lockpicking class going to end?" In all the business of life, you forgot about the heist, you tell Carl that the class ended months ago. He is not pleased. "Just because this isn't important to you, doesn't mean it's not important to me! This Hot Air Balloon Heist is all I have!" You try to calm him down but that just makes him angrier. "Have a nice life!" he shouts as he hangs up the phone. Your fiance walks in and sees you with a distraught look on your face. "Are you okay?" they ask. You reassure them that you are. "Who was that on the phone?". You tell them it was a friend from a different time, when you were a different person. Months later, the wedding has finished and the outdoor reception is going perfectly. Well... almost perfectly. Even though you haven't talked in over a year, a part of you wishes Carl was here. As you are thinking about what may have been, you see something in the sky. High above the clouds, a hot air balloon floats along the horizon.
                          <br><br><b>Ending 17 of #</b>
                        <br>Thanks for playing!
                        <br>Refresh the page and make different choices to get differnent endings`;
              } else {
                document.getElementById(
                  "story"
                ).innerHTML += `<br>You take out your phone and call the number to the locksmith that Carl found. It goes straight to voicemail. "The Locksmith is currently closed. For Locksmith services, please call back during business hours. For 24/7 service, take our short 5 month class to learn lockpicking for yourself. Have a good day." And with that, any hope of opening this door disappeared. You and Carl decied to just go home. The locksmith doesn't open for hours, and that course doesn't sound life changing to say the least. On the bikeride home, you wonder what you could have done for a different outcome...
                          <br><br><b>Ending 18 of #</b>
                        <br>Thanks for playing!
                        <br>Refresh the page and make different choices to get differnent endings`;
              }
            }
          }
        }
      } else {
        document.getElementById(
          "story"
        ).innerHTML += `<br>You decide that Carl is dangerous and must be stopped. His goal is to steal George Washington's Personal Hot Air Balloon. Legend has it, that very balloon was deployed from the White House Fleet by Woodrow Wilson to help resuce surviviors of the sinking of the Titanic. You are about to leave, when you realize you are forgetting something...`;
        const toolChoiceStopHeist = prompt(
          `You decide that Carl is dangerous and must be stopped. His goal is to steal George Washington's Personal Hot Air Balloon. Legend has it, that very balloon was deployed from the White House Fleet by Woodrow Wilson to help resuce surviviors of the sinking of the Titanic. You are about to leave, when you realize you are forgetting something... \n What do you go back and get? \n 1. Car Keys \n 2. Lighter \n 3. Gun`
        );
        if (toolChoiceStopHeist === "1") {
          document.getElementById(
            "story"
          ).innerHTML += `<br>Keys! You grab your car keys, hop in your car, and drive to the Hot Air Balloon Mueseum. Carl is already there when you arrive. `;
        }
      }
    }
  }
} else {
  document.getElementById(
    "story"
  ).innerHTML += `You roll over and try fall back to sleep. Y`;
}

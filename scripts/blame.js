//Not working in local, but should work once bot brain is hooked up

module.exports = function(robot){
  var blamePeople = [];

  if(robot.brain.data.users.length){
    for (let i = 0; i<robot.brain.users.length; i++) {
      blamePeople.push(robot.brain.userForName(robot.brain.data.users[i].id));
    }
    robot.brain.set('blamePeople', blamePeople);
  }

  else{

    if (!robot.brain.blamePeople){
      blamePeople = ['Robbie', 'Rebekah', 'Caleb', 'Geoff', 'Khai', 'Todd', 'Luke', 'Josh', 'Brian'];
      robot.brain.set('blamePeople', blamePeople);
    }
    else{
      blamePeople = robot.brain.blamePeople;
    }

    robot.hear('addBlamePerson (.*)', function(msg){
      let blamePerson = msg.match[1];
      blamePeople.push(blamePerson);
      robot.brain.set('blamePeople', blamePeople);
    });

    robot.hear('removeBlamePerson (.*)', function(msg){
      let blamePerson = msg.match[1];
      for (let i=blamePeople.length-1; i>=0; i--) {
        if (blamePeople[i] === blamePerson) {
          blamePeople.splice(i, 1);
          robot.brain.set('blamePeople', blamePeople);
          break;
        }
      }
    });
  }

  robot.hear('blame', function(msg){
    msg.send('Blame ' + msg.random(robot.brain.blamePeople));
  });

  robot.hear('sorry', function(msg){
    msg.send('Blame ' + msg.random(robot.brain.blamePeople));
  });

  robot.hear('fault', function(msg){
    msg.send('Blame ' + msg.random(robot.brain.blamePeople));
  });

  robot.hear('listBlamePeople', function(msg){
    msg.send(robot.brain.blamePeople);
  });

};

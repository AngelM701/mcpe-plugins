function procCmd(cmd) {// Feel free to use this code and edit it to your needs!
   var cmd = cmd.split(" ");
        if(cmd == "fly on") {
                Player.setCanFly(1);
        } else if(cmd == "fly off") {
                Player.setCanFly(0);
                
     }
        
}

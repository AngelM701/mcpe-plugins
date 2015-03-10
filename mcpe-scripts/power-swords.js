ModPE.setItem(500,"ruby",0,"Power-Sword");

function attackHook(attacker, victim){
        if(getCarriedItem()==500){//power sword id is 500, attack and check out what happens ;)
                        Entity.setFireTicks(victim, 20);
     }
  }

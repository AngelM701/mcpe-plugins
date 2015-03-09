function useItem (x, y, z, iteid, blockId, side)
{// this hole code will spawn steve by tapping the ground
        if(itemId == 218)
        {//you need to tap on the ground with a stick
                   var custom = Level.spawnMob(x,y+1,z,11,"mob/char.png");
                   Entity.setRenderType(custom, 3)
                  clientMessae("Steve Joined The Game");
      }
}

function attackHook(attacker,victim) {// this code will remove entities by tapping on them this is only intended for steve!
Entity.remove(victim);
}

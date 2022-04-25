import { CreateTuitDto } from './dto/create-tuit.dto';
import { UpdateTuitDto } from './dto/update-tuit.dto';
import { Tuits } from './tuits.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TuitsService {
private tuits: Tuits[]=[
    {
        id: '1',
        message:"Ana es una mujer de exitos"
    }
]

getTuits(): Tuits[]{
    return this.tuits;
}

getTuit(id:string):Tuits{
    return this.tuits.find((item) => item.id ==id)
}

createTuit({message}:CreateTuitDto){
    console.log("ingreso a service");
    
    this.tuits.push({
        id:(Math.floor(Math.random() * 2000) +1).toString(),
        message
    })
}

updateTuit(id:string,{message}:UpdateTuitDto){
    const tuit= this.getTuit(id)
        tuit.message= message;
        return tuit;
}

removeTuit(id:string){
    const index = this.tuits.findIndex((tuit) => tuit.id ===id);
    if (index >= 0) {
        this.tuits.splice(index,1)
        
    }
}


}

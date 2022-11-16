import { Component } from "react";
import image from "../images/cartoon-funny-seamless-wide-fantasy-landscape.jpg"
import players from "../images/Cyborg_idle.png"
import run from "../images/Cyborg_run.png"
import jumb from "../images/Cyborg_jump.png"
import attacks from "../images/Cyborg_attack3.png"
import enemys from "../images/enemyidle.png"
import enemysrun from "../images/enemyrun.png"
import enemysjumb from "../images/enemyjumb.png"
import enemysattack from "../images/enemyattack.png"


class Home extends Component{
   componentDidMount(){
       const canvas = document.querySelector("canvas");
       const c = canvas.getContext("2d");
       canvas.width=1024;
       canvas.height=570;
       const gravity =0.2
       
    
       class sprite{
           constructor({position,velocity,color="red",offset,imgsrc,scale=1,framesmax=1,sprites}){
               this.position = position;
               this.velocity = velocity;
               this.height = 150;
               this.width = 50;
               this.health = 100;
               this.image = new Image()
               this.image.src =imgsrc
             this.scale = scale
             this.framesmax = framesmax
             this.framecurrent =0
             this.frameselapsed = 1
             this.frameshold =5
             this.sprites = sprites
             for(const sprite in this.sprites){
                 sprites[sprite].image= new Image()
                 sprites[sprite].image.src=sprites[sprite].imgsrc
             }
               this.attackBox = {

                   position:{x:this.position.x,y:this.position.y},
                   offset :offset,
                   width:100,
                   height:50,
                   height:100,
                   width:50,
               }
              
               this.isattacking =false;
           }
           draw(){
            c.drawImage(
                this.image,
                this.framecurrent*(this.image.width/this.framesmax),
                0,
                this.image.width/this.framesmax,
                this.image.height,
                this.position.x,this.position.y,
                (this.image.width/this.framesmax)*this.scale,
                this.image.height*this.scale
           
                
                
                
                )

            if(this.isattacking){
        
        }
        }

        update(){
            
            this.draw()
            this.frameselapsed++
            if(this.frameselapsed%this.frameshold ===0){
            if(this.framecurrent<this.framesmax-1){
                this.framecurrent++
            }
            else{
                this.framecurrent=0
            }
        }
            this.attackBox.position.x = this.position.x +this.attackBox.offset.x
            this.attackBox.position.y = this.position.y
            this.position.y+=this.velocity.y;
            this.position.x +=this.velocity.x

            if(this.position.y+this.height +this.velocity.y >=canvas.height-170){
                this.velocity.y= 0

            }
            else this.velocity.y +=gravity

            
        }
        attack(){
            this.switchsprite("attack")
            this.isattacking = true;
            setTimeout(
                ()=>{
this.isattacking = false
                }
                ,100)
        }
        switchsprite(sprite){
            if(this.image===this.sprites.attack.image && this.framecurrent<this.sprites.attack.framesmax-1) return
            switch(sprite){
                case "idle":
                    if(this.image !==this.sprites.idle.image){
                    this.image=this.sprites.idle.image
                    this.framesmax=this.sprites.idle.framesmax
                    }

                break
                case "run":
                    if(this.image !==this.sprites.run.image){

                    this.image=this.sprites.run.image
                    this.framesmax=this.sprites.run.framesmax
                }

                    break
                    case "jumb":
                        if(this.image !==this.sprites.jumb.image){

                        this.image=this.sprites.jumb.image
                        this.framesmax=this.sprites.jumb.framesmax
                        }
                        break
                        case "attack":
                            if(this.image !==this.sprites.attack.image){
    
                            this.image=this.sprites.attack.image
                            this.framesmax=this.sprites.attack.framesmax
                            }
                            break

                                case "idle":
                    if(this.image !==this.sprites.idle.image){
                    this.image=this.sprites.idle.image
                    this.framesmax=this.sprites.idle.framesmax
                    }

                break
                case "run":
                    if(this.image !==this.sprites.run.image){

                    this.image=this.sprites.run.image
                    this.framesmax=this.sprites.run.framesmax
                }

                    break
                    case "jumb":
                        if(this.image !==this.sprites.jumb.image){

                        this.image=this.sprites.jumb.image
                        this.framesmax=this.sprites.jumb.framesmax
                        }
                        break
                        case "attack":
                            if(this.image !==this.sprites.attack.image){
    
                            this.image=this.sprites.attack.image
                            this.framesmax=this.sprites.attack.framesmax
                            }
                            break
                           

                            
            }
        }
       }
   

       class back{
        constructor({position,imgsrc}){
            this.position = position;
            this.height = 150;
            this.width = 50;
            this.image = new Image()
            this.image.src =imgsrc
           
        
           
  
          
        }
        draw(){
            c.drawImage(this.image,this.position.x,this.position.y,1024,570)
            
   
     }

     update(){
         this.draw()
     

         
     }

    }
    const background = new back({
        position:{
            x:0,
            y:0
        },
        imgsrc:image
    })
    console.log(image)
       const player = new sprite({
           position:{ 
           x:0,
           y:0
       },
       velocity:{
           x:0,
           y:0
       },
       offset:{
           x:0,
           y:0,
       },
     scale:5,
     imgsrc:players,
     framesmax:4,
       sprites:{
           idle:{
            imgsrc:players,
         
            framesmax:4,

           },
           run:{
            imgsrc:run,
            framesmax:6,
            
           },
           jumb:{
            imgsrc:jumb,
            framesmax:4
        },
        attack:{
            imgsrc:attacks,
            framesmax:8

        }
          
       }
    })
       player.draw()
       const enemy = new sprite({
        position:{ 
        x:500,
        y:0
    },
    velocity:{
        x:0,
        y:0
    },
    offset:{
        x:0,
        y:0,
    },
    scale:5,
    imgsrc:enemys,
    framesmax:4,
      sprites:{
          idle:{
           imgsrc:enemys,
        
           framesmax:4,

          },
          run:{
           imgsrc:enemysrun,
           framesmax:6,
           
          },
          jumb:{
           imgsrc:enemysjumb,
           framesmax:4
       },
       attack:{
           imgsrc:enemysattack,
           framesmax:6

       }
         
      }
 })
enemy.draw()
const keys = {
    ArrowRight:{
        pressed : false
    },
    ArrowLeft:{
        pressed:false
    },
    ArrowUp:{
        pressed:false
    },
    
    a:{
        pressed : false
    },
    d:{
        pressed:false
    },
    w:{
        pressed:false
    }
}
function reactAngularcoll({reactAngular1,reactAngular2}){
    return(
        reactAngular1.attackBox.position.x + reactAngular1.attackBox.height >= reactAngular2.position.x && reactAngular1.attackBox.position.x <=reactAngular2.position.x+reactAngular2.width
    &&reactAngular1.attackBox.position.y+reactAngular1.attackBox.height>=reactAngular2.position.y &&reactAngular1.attackBox.position.y<=reactAngular2.position.y+reactAngular2.height
    )
}

let lastkey ="";
 function winner({player,enemy}){
    if(player.health === enemy.health){
        document.querySelector(".displaytext").innerHTML = "Tie"
        document.querySelector(".displaytext").style.display="flex"
 
     }
     if(player.health > enemy.health){
         document.querySelector(".displaytext").innerHTML = "player 1 wins"
         document.querySelector(".displaytext").style.display="flex"
  
      }
      if(player.health < enemy.health){
         document.querySelector(".displaytext").innerHTML = "player 2 wins"
         document.querySelector(".displaytext").style.display="flex"
  
      }
  
     

}


let timer = 60;
function derciseTimer(){
    if(timer>0){
        setTimeout(derciseTimer,1000)

        timer--
        document.querySelector("#timer").innerHTML=timer

    }
    if(timer ==0){
    if(player.health === enemy.health){
       document.querySelector(".displaytext").innerHTML = "Tie"
       document.querySelector(".displaytext").style.display="flex"

    }
    if(player.health > enemy.health){
        document.querySelector(".displaytext").innerHTML = "player 1 wins"
        document.querySelector(".displaytext").style.display="flex"
 
     }
     if(player.health < enemy.health){
        document.querySelector(".displaytext").innerHTML = "player 2 wins"
        document.querySelector(".displaytext").style.display="flex"
 
     }
  
}
}
derciseTimer()
if(player.health<=0|| enemy.health<=0){
    winner({player,enemy})
 }
function animate(){
    
    window.requestAnimationFrame(animate)
  
    background.update()
player.update()
enemy.update()
player.velocity.x=0;
enemy.velocity.x=0;
player.switchsprite("idle")
enemy.switchsprite("idle")



if(keys.ArrowRight.pressed && lastkey==="ArrowRight"){
    player.velocity.x=6
    player.switchsprite("run")

}
else if(keys.ArrowLeft.pressed&& lastkey==="ArrowLeft"){
    player.velocity.x=-6
    player.switchsprite("run")
}
else if(keys.ArrowUp.pressed && lastkey==="ArrowUp"){
    player.velocity.y=-7
    player.switchsprite("jumb")

    player.framesmax = 4
    
}


if(keys.d.pressed && lastkey==="d"){
    enemy.velocity.x=6
    enemy.switchsprite("run")

}
else if(keys.a.pressed&& lastkey==="a"){
    enemy.velocity.x=-6
    enemy.switchsprite("run")

}
else if(keys.w.pressed && lastkey==="w"){
    
    enemy.velocity.y=-7
    enemy.switchsprite("jumb")
}    


if(reactAngularcoll({reactAngular1:player,reactAngular2:enemy})&& player.isattacking ){
    player.isattacking =false
    enemy.health-=20
    document.querySelector("#enenyHealth").style.width=enemy.health +"%"
}


if(reactAngularcoll({reactAngular1:enemy,reactAngular2:player})&& enemy.isattacking ){
    enemy.isattacking =false
    player.health-=20
    document.querySelector("#playerHealth").style.width=player.health +"%"
}
if(player.health<=0 || enemy.health<=0){
    winner({player,enemy})
 }
}

animate()
window.addEventListener("keydown",(event)=>{
    switch(event.key){
        case "ArrowRight":
            keys.ArrowRight.pressed=true
            lastkey = "ArrowRight"


            break
            case "ArrowLeft":
                lastkey = "ArrowLeft"

                keys.ArrowLeft.pressed=true

                break

                case "ArrowUp":
                    lastkey = "ArrowUp"
    
                    keys.ArrowUp.pressed=true

                    break
                    case " ":       
                        player.attack()
                        player.framesmax = 8

                        break
    
                        case "0":               
                        enemy.attack()
                        break
    

                    case "d":
                        keys.d.pressed=true
                        lastkey = "d"
            
                        break
                        case "a":
                            lastkey = "a"
            
                            keys.a.pressed=true
                            break
            
                            case "w":
                                lastkey = "w"
                
                                keys.w.pressed=true
                                break
                  
    }

})
window.addEventListener("keyup",(event)=>{
    switch(event.key){
        case "ArrowRight":
            keys.ArrowRight.pressed=false
            break
            case "ArrowLeft":
                keys.ArrowLeft.pressed=false
                break
                case "ArrowUp":
                    keys.ArrowUp.pressed=false
                    break

                    case "d":
                        keys.d.pressed=false
                        break
                        case "a":
                            keys.a.pressed=false
                            break
                            case "w":
                                keys.w.pressed=false
                                break
    }
})
   }
   
    render(){
   
        return(
            <div style={{position:"relative",display:"inline-block"}}>
                <div style={{position:"absolute",display:"flex",alignItems:"center",width:"100%",padding:"20px"}}>
                <div style={{position:"relative",height:"30px",width:"100%"}}>
                <div style={{background:"red",height:"30px"}} ></div>
                <div style={{position:"absolute",background:"green",top:"0",left:"0",bottom:"0",right:"0"}} id="playerHealth"></div>
                </div>
                <div style={{background:"red",width:"100px",height:"100px",flexShrink:"0",color:"white",fontWeight:"bold",textAlign:"center",fontSize:"4em"}} id="timer">60</div>
                <div style={{position:"relative",height:"30px",width:"100%"}}>
                <div style={{background:"red",height:"30px"}} ></div>
                <div style={{position:"absolute",background:"green",top:"0",left:"0",bottom:"0",right:"0"}} id="enenyHealth"></div>
                </div>
                </div>
<div className="displaytext" style={{position:"absolute",color:"white",display:"flex",height:"100%",alignItems:"center",width:"100%",justifyContent:"center",display:"none"}}>Tie</div>
<canvas/>
</div>
    


  



   
        )
    }
}
export default Home

  




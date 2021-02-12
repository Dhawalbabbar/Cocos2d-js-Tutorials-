/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var INITIALIZED=false;

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    // tag:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        //adding sprite
        var sprite=new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5,0.5));
        sprite.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(sprite,0);

        //move
        // var sprite_action=cc.MoveTo.create(2,cc.p(100,50));
        // sprite.runAction(sprite_action);

        // var sprite_action=cc.MoveBy.create(2,cc.p(500,100));
        // sprite.runAction(sprite_action);

        //jump
        // var sprite_action=cc.JumpTo.create(2,cc.p(100,200),50,4);
        // sprite.runAction(sprite_action);

        // var sprite_action=cc.JumpBy.create(2,cc.p(100,200),50,4);
        // sprite.runAction(sprite_action);

        //bezier
        // var bezier=[cc.p(0,size.height/2),cc.p(100,-size.height/4),cc.p(300,300)];
        // var sprite_action=cc.BezierTo.create(3,bezier);
        // sprite.runAction(sprite_action);

        // var bezier=[cc.p(0,size.height/2),cc.p(100,-size.height/4),cc.p(300,300)];
        // var sprite_action=cc.BezierBy.create(3,bezier);
        // sprite.runAction(sprite_action);

        //place
        // var sprite_action=cc.Place.create(cc.p(200,150));
        // sprite.runAction(sprite_action);
        // console.log(size);

        //repeat
        // var bezier=[cc.p(0,size.height/2),cc.p(100,-size.height/4),cc.p(300,300)];
        // var sprite_action=cc.Repeat.create(cc.BezierTo.create(3,bezier),5);
        // sprite.runAction(sprite_action);

        // var bezier=[cc.p(0,size.height/2),cc.p(100,-size.height/4),cc.p(300,300)];
        // var sprite_action=cc.RepeatForever.create(cc.BezierTo.create(3,bezier));
        // sprite.runAction(sprite_action);

        //scale
        // var sprite_action=cc.ScaleTo.create(2,3,2);
        // var repeat_action=cc.Repeat.create(sprite_action,3)
        // sprite.runAction(sprite_action);

        // var sprite_action1=cc.ScaleBy.create(2,3,2);
        // var repeat_action=cc.Repeat.create(sprite_action1,3)
        // sprite.runAction(repeat_action);

        //Tint colour
        // var sprite_action=cc.TintTo.create(2,-127,-255,-127);
        // sprite.runAction(sprite_action);

        // var sprite_action=cc.TintBy.create(1,-10,-50,-50);
        // var repeat_action=cc.Repeat.create(sprite_action,5);
        // sprite.runAction(repeat_action);

        //Fade
        // var sprite_action=cc.FadeTo.create(2,50);
        // sprite.runAction(sprite_action);

        // sprite.setOpacity(10);
        // var sprite_action=cc.FadeIn.create(5);
        // sprite.runAction(sprite_action);

        // var sprite_action=cc.FadeOut.create(5);
        // sprite.runAction(sprite_action);

        //skewing
        // var sprite_action=cc.SkewTo.create(2, 10, 110);
        // sprite.runAction(sprite_action);

        // var sprite_action=cc.SkewBy.create(2, 140, 0);
        // sprite.runAction(sprite_action);

        //rotate
        // var sprite_action=cc.RotateTo.create(2,90);
        // sprite.runAction(sprite_action);

        // var sprite_action=cc.RotateBy.create(2,90);
        // var repeat_action=cc.Repeat.create(sprite_action,5);
        // sprite.runAction(repeat_action);

        //sequence
        // var sprite_action1=cc.MoveBy.create(2,cc.p(50,100));
        // var sprite_action2=cc.RotateBy.create(5,90);
        // var sequence_action=cc.Sequence.create(sprite_action1,sprite_action2);
        // sprite.runAction(sequence_action);

        //sound play
        // cc.audioEngine.playEffect(res.shoot_sound);  //does not fully work for me
        // tag=cc.audioEngine.playEffect(res.shoot_sound,true);
        // cc.audioEngine.resumeEffect(soundId);
        // cc.audioEngine.setEffectsVolume(0.1);

        //schedule
        // this.scheduleOnce(StopSound,6);
        // cc.audioEngine.playEffect(res.shoot_sound,true);
        // cc.audioEngine.playMusic(res.bgMusic,false);
        // this.scheduleOnce(StopMusic,3);
        // this.scheduleOnce(PauseMusic,5);
        // this.scheduleOnce(ResumeMusic,2);

        //single touch events
        // if (cc.sys.capabilities.hasOwnProperty('touches')){
        //     var sprite_action=cc.RotateTo.create(2,90);
        //     sprite.runAction(sprite_action);

        //     cc.eventManager.addListener({
        //         event:cc.EventListener.TOUCH_ONE_BY_ONE,

        //         onTouchBegan:function(touch,event)
        //         {
        //             cc.log("touch began"+touch.getLocationX());
        //             // cc.log(touch.getLocationY());
        //             return true;
        //         },

        //         //moved
        //         onTouchMoved:function(touch,event){
        //             cc.log("touch moved"+touch.getLocationX());
        //         },

        //         //end
        //         onTouchEnded:function(touch,event){
        //             cc.log("touch end"+touch.getLocationX());
        //         },

        //         onTouchCancelled:function(touch,event){
        //             cc.log("Touch cancelled");
        //         }
        //     },this);
        // }

        // if(cc.sys.capabilities.hasOwnProperty('touches')){
        //     cc.eventManager.addListener({
        //         event:cc.EventListener.TOUCH_ALL_AT_ONCE,

        //         onTouchesBegan:function(touches,event){
        //             if (touches.length>1){
        //             cc.log("Touch Began 1 "+touches[0].getLocationX());
        //             cc.log("Touch Began 2 "+touches[1].getLocationX());
        //             }
        //             else{
        //                 cc.log('here');
        //             }
        //         }
        //     },this)
        // }

        
        //mouse events
        // var click=false;
        // if(cc.sys.capabilities.hasOwnProperty('mouse')){
        //     cc.log('here');
        //     cc.eventManager.addListener({
        //         event:cc.EventListener.MOUSE,
                
        //         onMouseDown:function(event){
        //             if(event.getButton()==cc.EventMouse.BUTTON_LEFT){
        //                 click=true;
        //                 var sprite_action=cc.RotateBy.create(2,90);
        //                 sprite.runAction(sprite_action);
        //             }
                    
        //         },
        //         onMouseUp:function(event){
        //             if(event.getButton()==cc.EventMouse.BUTTON_LEFT){
        //                 click=false;
        //                 var sprite_action=cc.RotateBy.create(2,-90);
        //                 sprite.runAction(sprite_action);
        //                 // cc.log("mouse location"+event.getLocationX());

        //             }
        //         },
        //         onMouseMove:function(event){
        //             var sprite_action1=cc.MoveTo.create(0,cc.p(event.getLocationX(),event.getLocationY()))
        //             if(click){
        //                 sprite.runAction(sprite_action1);
        //             }
                    
        //         },
        //         onMouseScroll:function(event){
        //             cc.log("mouse location"+event.getLocationX());
        //         }
        //     },this);
        // }

        //keyboard
        // if(cc.sys.capabilities.hasOwnProperty('keyboard')){
        //     cc.log('here');
        //     cc.eventManager.addListener({
        //         event:cc.EventListener.KEYBOARD,

        //         onKeyPressed:function(keypr,event){
        //             cc.log("Key pressed "+keypr.toString());
        //         },

        //         onKeyReleased:function(keypr,event){
        //             cc.log("Key released "+keypr.toString());
        //         }
        //     },this);
        // }

        //menu
        // var playItem=new cc.MenuItemFont("Play",play);
        // var highScoresItem=new cc.MenuItemFont("HighScores",highScores);
        // var settingsItem=new cc.MenuItemFont("Settings",settings);
        // var imageItem=new cc.MenuItemImage(res.CloseNormal_png,res.CloseSelected_png,imageFunc);

        // var items=4;
        // // imageItem.setPosition(cc.p(size.width/2,(size.height/items+1)*4));
        // // playItem.setPosition(cc.p(size.width/2,(size.height/items+1)*3));
        // // highScoresItem.setPosition(cc.p(size.width/2,(size.height/items+1)*2));
        // // settingsItem.setPosition(cc.p(size.width/2,(size.height/items+1)*1));

        // var menu=new cc.Menu(playItem,highScoresItem,settingsItem,imageItem);
        // menu.alignItemsVerticallyWithPadding(size.height/(items+1));
        // // menu.setPosition(cc.p(0,0));

        // this.addChild(menu);

        //scene management
        //do the initialized thing and add scene to project.json and main.js
        // var menuItem1=new cc.MenuItemFont("Push",play);
        // var menuItem2=new cc.MenuItemFont("replace",replace);
        // var menu=new cc.Menu(menuItem1,menuItem2);
        // menu.alignItemsVertically();
        // this.addChild(menu);

        //animation
        // var spriteAction=new cc.EaseBounceOut( new cc.MoveBy(2,cc.p(200,0)));
        // var spriteAction=new cc.EaseCircleActionIn( new cc.MoveBy(2,cc.p(200,0)));
        // sprite.runAction(spriteAction);

        //scheduling

        return true;
    }
});
// var replace=function(){
//     var scene=new HelloWorldScene2();
//     cc.director.runScene(scene);
// }
// var play=function(){
//     var scene= new HelloWorldScene2();
//     // cc.director.pushScene(new cc.TransitionFade(4,scene,cc.Color(255, 255, 0)));
//     // cc.director.pushScene(new cc.TransitionJumpZoom(2,scene));
//     cc.director.pushScene(new cc.TransitionFade(3.0,scene));
//     // cc.easeActionWithAction(action);
// }

// var imageFunc=function(){
//     cc.log('menu image func');
// }
// var play=function(){
//     cc.log("in play function");
// }
// var highScores=function(){
//     cc.log("in highScore function");
// }
// var settings=function(){
//     cc.log("in settings function");
// }
// var PauseMusic=function(){
//     cc.audioEngine.pauseMusic();
// }
// var ResumeMusic=function(){
//     cc.audioEngine.resumeMusic();
// }
// var StopSound=function () {
//     // cc.audioEngine.stopAllEffects();
//     cc.audioEngine.stopEffect(tag);
// };
// var StopMusic=function () {
//     // cc.audioEngine.stopAllEffects();
//     cc.audioEngine.stopMusic();
// };


var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        if (INITIALIZED==false){
            INITIALIZED=true;
            var layer = new HelloWorldLayer();
            this.addChild(layer);
        }
        
    }
});


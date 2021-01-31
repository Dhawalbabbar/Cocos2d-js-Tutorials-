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


var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite=new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5,0.5));
        // sprite.setPosition(cc.p(0,0));
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
        
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});


import './js/libs/weapp-adapter'
import './js/libs/symbol'

window.PIXI = require('./js/pixi/pixi')
require('./js/pixi/pixi-spine')

//import Main from './js/main'
//
//new Main()

init();

function init() {
    var renderer = new PIXI.CanvasRenderer(canvas.width, canvas.height, {view:canvas});
    document.body.appendChild(renderer.view);
    var stage = new PIXI.Container();
    PIXI.loader.add('spineCharacter', 'data/Boy_ShortsShirt_Angry.json')
        //        PIXI.loader.add('spineCharacter', 'data/skeleton.json')
        .load(function (loader, resources) {
            var animation = new PIXI.spine.Spine(resources.spineCharacter.spineData);
            stage.addChild(animation);
//                    animation.state.addAnimationByName(0, 'hiphop02', true, 0);
            animation.state.addAnimationByName(0, 'angry_sender_0', true, 0);
//                    animation.state.addAnimationByName(0, 'angry_recipient_1', true, 0);
            animation.x = 100;
            animation.y = 300;
            animation.scale.x = 0.5;
            animation.scale.y = 0.5;
            animate();

            function animate() {
                requestAnimationFrame(animate);
                renderer.render(stage);
            }
        });

}
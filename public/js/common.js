/**
 * Created by lixiang on 16/8/26.
 */


    function Common(obj){
      this.obj=$(obj)   //下拉;
      this.uiInit = {
            // Set variables
            $lHtml              : jQuery('html'),
            $lBody              : jQuery('body'),
            $lhead              : jQuery('#c-header'),
            $lMain              : jQuery('#c-content'),
            $lFooter            : jQuery('#c-footer'),
      }
      this.listDown();
      this.contentHeight();

    }
    Common.prototype.listDown=function (obj){
        this.obj.on('click',function (){
            this.bclick= !this.bclick
            if(this.bclick){
                $(this).find('i').attr('class','icon-caret-up')
                $(this).next().css('display','block')
            }else {
                $(this).find('i').attr('class','icon-caret-down')
                $(this).next().css('display','none')
            }
        })
    };

    Common.prototype.contentHeight=function (){

        var $hWindow     = jQuery(window).height();
        var $hHeader     = this.uiInit.$lhead.outerHeight();
        var $hFooter     = this.uiInit.$lFooter.outerHeight();
        var $hMain     = this.uiInit.$lMain.outerHeight();

        if($hMain+$hHeader+$hFooter<$hWindow){
            var $lh=$hWindow-$hFooter-$hHeader;
            this.uiInit.$lMain.css('min-height',$lh);
            this.uiInit.$lFooter.css('visibility','inherit');
        }

    }




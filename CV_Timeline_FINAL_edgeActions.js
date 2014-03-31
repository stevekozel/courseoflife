(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){$('Stage').css({"background-image":"url(http://courseoflife.kosekozel.com/images/seamlesstexture6_1200.png)"});if($.browser.webkit){var objectOutput='';$('.kozel-popover').each(function(i,popover){objectOutput=objectOutput+'<object class="hiddensvg" height="1" width="1" data="'+$(popover).attr("src")+'" type="image/svg+xml" style="width: 1px;height: 1px;pointer-events: none;opacity: 0;overflow: hidden;"></object>';});$('body').append(objectOutput);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_GRAD-BTTN}","mouseover",function(sym,e){sym.$("TRHS").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TRHS}","mouseleave",function(sym,e){sym.$("TRHS").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_KDPS-BTTN}","mouseover",function(sym,e){sym.$("KDPS").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_KDPS}","mouseleave",function(sym,e){sym.$("KDPS").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PSHO-BTTN}","mouseover",function(sym,e){sym.$("PSHO").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PSHO}","mouseleave",function(sym,e){sym.$("PSHO").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CAKE-BTTN}","mouseover",function(sym,e){sym.$("CAKE").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CAKE}","mouseleave",function(sym,e){sym.$("CAKE").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PHOT-BTTN}","mouseover",function(sym,e){sym.$("PHOT").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RIVA-BTTN}","mouseover",function(sym,e){sym.$("RIVA").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_WEBB-BTTN}","mouseover",function(sym,e){sym.$("WEBB").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PLAN-BTTN}","mouseover",function(sym,e){sym.$("PLAN").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ILLU-BTTN}","mouseover",function(sym,e){sym.$("ILLU").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ILLU}","mouseleave",function(sym,e){sym.$("ILLU").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_REEV-BTTN}","mouseover",function(sym,e){sym.$("REEV").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_REEV}","mouseleave",function(sym,e){sym.$("REEV").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PROT-BTTN}","mouseover",function(sym,e){sym.$("PROT").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PROT}","mouseleave",function(sym,e){sym.$("PROT").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HIBE-BTTN}","mouseover",function(sym,e){sym.$("HIBE").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HIBE}","mouseleave",function(sym,e){sym.$("HIBE").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_DIAR-BTTN}","mouseover",function(sym,e){sym.$("DIAR").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CIL-BTTN}","mouseover",function(sym,e){sym.$("CIL").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TBOM-BTTN}","mouseover",function(sym,e){sym.$("TBOM").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RFT-BTTN}","mouseover",function(sym,e){sym.$("RFT").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TOUR-BTTN}","mouseover",function(sym,e){sym.$("BOOK").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_EAST-BTTN}","mouseover",function(sym,e){sym.$("EAST").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_EAST}","mouseleave",function(sym,e){sym.$("EAST").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_SITE-BTTN}","mouseover",function(sym,e){sym.$("SITE").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_SITE}","mouseleave",function(sym,e){sym.$("SITE").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CLAY-BTTN}","mouseover",function(sym,e){sym.$("CLAY").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CLAY}","mouseleave",function(sym,e){sym.$("CLAY").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TBOM}","mouseleave",function(sym,e){sym.$("TBOM").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_STL-NULL}","mouseover",function(sym,e){sym.$("STL").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_VIEN-NULL}","mouseover",function(sym,e){sym.$("VIEN").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MARR-NULL}","mouseover",function(sym,e){sym.$("MARR").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MOZ-NULL}","mouseover",function(sym,e){sym.$("MOZ").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MOZ}","mouseleave",function(sym,e){sym.$("MOZ").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_FATH-NULL}","mouseover",function(sym,e){sym.$("FATH").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_FATH}","mouseleave",function(sym,e){sym.$("FATH").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PHOT}","click",function(sym,e){window.open("http://kosekozel.files.wordpress.com/2014/03/venice_kozel-e1393714179176.jpeg","new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RIVA}","click",function(sym,e){window.open("http://vimeo.com/45106425","new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_WEBB}","click",function(sym,e){window.open("http://www.youtube.com/playlist?list=PLwQx-b8YQz4LrFqPiRqLVmWeo_rw5vkdS","new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PLAN}","click",function(sym,e){window.open("http://youtu.be/KBJHdNK5B-M","new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HIBE}","click",function(sym,e){window.open("https://www.behance.net/gallery/The-Hibernauts-Periodic-Fable/1757116","new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_DIAR}","click",function(sym,e){window.open("http://kosekozel.wordpress.com/2008/06/30/gentleman-auction-house-tour-diary-the-riverfront-times/","new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CIL}","click",function(sym,e){window.open("https://www.behance.net/gallery/Gentleman-Auction-Houses-Christmas-In-Love-EP/1756834","new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TBOM}","click",function(sym,e){window.open("http://vimeo.com/1555593","new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_EAST}","click",function(sym,e){window.open("https://www.behance.net/gallery/Easter-At-The-Pageant-2011-The-Gathering-UMC/1757284","new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_SITE}","click",function(sym,e){window.open("http://gatheringnow.org/","new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MOZ}","click",function(sym,e){window.open("http://vimeo.com/33500203","new");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BEHANCE2}","mouseover",function(sym,e){sym.$("BEHANCE2Copy").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LINKEDIN2}","mouseover",function(sym,e){sym.$("LINKEDIN2Copy").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_VIMEO2}","mouseover",function(sym,e){sym.$("VIMEO2Copy").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_WORDPRESS2}","mouseover",function(sym,e){sym.$("WORDPRESS2Copy").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_WORDPRESS2Copy}","mouseout",function(sym,e){sym.$("WORDPRESS2Copy").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_VIMEO2Copy}","mouseout",function(sym,e){sym.$("VIMEO2Copy").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LINKEDIN2Copy}","mouseout",function(sym,e){sym.$("LINKEDIN2Copy").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BEHANCE2Copy}","mouseout",function(sym,e){sym.$("BEHANCE2Copy").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BEHANCE2Copy}","click",function(sym,e){window.open("https://www.behance.net/kose_kozel","new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LINKEDIN2Copy}","click",function(sym,e){window.open("www.linkedin.com/in/kosekozel/","new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_WORDPRESS2Copy}","click",function(sym,e){window.open("http://kosekozel.com/","new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_VIMEO2Copy}","click",function(sym,e){window.open("http://vimeo.com/kosekozel","new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_REEV}","click",function(sym,e){window.open("https://vimeo.com/88105316","new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RFT}","click",function(sym,e){window.open("https://www.behance.net/gallery/MUSIC-REVIEWS/836077","new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MARR}","mouseleave",function(sym,e){sym.$("MARR").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_VIEN}","mouseleave",function(sym,e){sym.$("VIEN").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_STL}","mouseleave",function(sym,e){sym.$("STL").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BOOK}","mouseleave",function(sym,e){sym.$("BOOK").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RFT}","mouseleave",function(sym,e){sym.$("RFT").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CIL}","mouseleave",function(sym,e){sym.$("CIL").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_DIAR}","mouseleave",function(sym,e){sym.$("DIAR").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_WEBB}","mouseleave",function(sym,e){sym.$("WEBB").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RIVA}","mouseleave",function(sym,e){sym.$("RIVA").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PHOT}","mouseleave",function(sym,e){sym.$("PHOT").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PLAN}","mouseleave",function(sym,e){sym.$("PLAN").hide();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-69389152");

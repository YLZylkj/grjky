document.writeln("<div id=\'ylzbigdata_im_container\'>");
document.writeln("    <div id=\'ylzbigdata_im_btn\'>");
document.writeln("        <a id=\'ylzbigdata_im_btn_a\' style=\'display: none; height: 40px; position: fixed; box-sizing: border-box; font-size: 13px; color: rgb(255, 255, 255); text-align: center; cursor: pointer; text-decoration: none; z-index: 9999999; border-width: 1px 1px 0; border-top-style: solid; border-right-style: solid; border-left-style: solid; border-top-color: rgba(0, 0, 0, 0.1); border-right-color: rgba(0, 0, 0, 0.1); border-left-color: rgba(0, 0, 0, 0.1); border-image: initial; border-bottom-style: initial; border-bottom-color: initial; border-radius: 20px;\'>");
document.writeln("            <span id=\'ylzbigdata_im_btn_img\' style=\'display:block;float:left;width:20px;height:20px;margin:10px 10px 0; background: url(https://znkf.ylzinfo.com/ylzbigdata_znkf_fe/static/images/msg.png) no-repeat; background-size:20px auto;\'></span>");
document.writeln("            <span style=\'display:block;float:left;width:1px;height:100%;background-color:rgba(0, 0, 0, .08);vertical-align:middle;background-color:#000\/\/9;filter:alpha(opacity=10)\/\/9;\'></span>");
document.writeln("            <span id=\'ylzbigdata_im_btn_text\' style=\'display:block;float:left;height:40px;line-height:40px;margin:0 10px;overflow-y:hidden; font-size: 14px; color: #fff;\'></span>");
document.writeln("        </a>");
document.writeln("    </div>");
document.writeln("    <div id=\'ylzbigdata_im_panel\' style=\'position:fixed;bottom:0;right:60px;z-index:99999999;display:none;width:450px;height:700px;overflow:hidden;background-color:transparent;box-shadow:0px 4px 12px 0px rgba(8,23,26,0.2);border-radius: 3px 3px 0px 0px;border:1px solid #ddd\/\/9;transition:bottom 0.3s;-webkit-transition:bottom 0.3s;-moz-transition:bottom 0.3s;-ms-transition:bottom 0.3s;-o-transition:bottom 0.3s;\'>");
document.writeln("        <iframe id=\'ylzbigdata_im_iframe\' frameborder=\'0\' scrolling=\'no\' allowtransparency=\'true\'");
document.writeln("                style=\'width:100%;height:100%;border:none;padding:0;margin:0;float:none;background:none;transition:height 0.1s;-webkit-transition:height 0.1s;-moz-transition:height 0.1s;-ms-transition:height 0.1s;-o-transition:height 0.1s;\'");
document.writeln("                src=\'\'>");
document.writeln("        </iframe>");
document.writeln("    </div>");
document.writeln("</div>");
document.writeln("");
document.writeln("<script>");
document.writeln("    var ylzbigdataSessionFinish = true;");
document.writeln("    var ylzbigdataBtnA = document.getElementById(\'ylzbigdata_im_btn_a\');");
document.writeln("    var ylzbigdataPanel = document.getElementById(\'ylzbigdata_im_panel\');");
document.writeln("    var ylzbigdataQueryObj");
document.writeln("    var ylzbigdataAppConfigResult");
document.writeln("    var ylzbigdataPluginBlankDialog = null");
document.writeln("    var ylzbigdataPluginNewTab = null");
document.writeln("    var ylzbigdataAppConfigScript = document.createElement(\'script\')");
document.writeln("    ylzbigdataReady(function() {");
document.writeln("        var dataAttr = document.getElementById(\'ylzbigdata_script\').getAttribute(\'data\')");
document.writeln("        ylzbigdataQueryObj = JSON.parse(dataAttr)");
document.writeln("        ylzbigdataQueryObj.url = ylzbigdataQueryObj.url + \'&loadFrom=button\'");
document.writeln("        if (ylzbigdataBtnA.addEventListener) {");
document.writeln("            ylzbigdataBtnA.addEventListener(\'click\', ylzbigdataBtnAClick)");
document.writeln("        } else if (ylzbigdataBtnA.attachEvent) {");
document.writeln("            ylzbigdataBtnA.attachEvent(\'onclick\', ylzbigdataBtnAClick)");
document.writeln("        }");
document.writeln("        if (window.addEventListener) {");
document.writeln("            window.addEventListener(\'message\', function(e) {");
document.writeln("                ylzbigdataWindowMessage(e)");
document.writeln("            })");
document.writeln("        } else if (window.attachEvent) {");
document.writeln("            window.attachEvent(\'onmessage\', function(e) {");
document.writeln("                ylzbigdataWindowMessage(e)");
document.writeln("            })");
document.writeln("        }");
document.writeln("        ylzbigdataAppConfigScript.src = \'https://znkf.ylzinfo.com/ylzbigdata_znkf/app/findByAppIdJsonp?appId=\' + ylzbigdataQueryObj.appId + \'&t=\' + new Date().getTime()");
document.writeln("        document.body.appendChild(ylzbigdataAppConfigScript)");
document.writeln("    })");
document.writeln("    function pullDownIm() {");
document.writeln("        ylzbigdataBtnA.style.display = \'block\'");
document.writeln("        ylzbigdataPanel.style.display = \'none\'");
document.writeln("    }");
document.writeln("    function closeIm() {");
document.writeln("        ylzbigdataBtnA.style.display = \'block\'");
document.writeln("        ylzbigdataPanel.style.display = \'none\'");
document.writeln("        ylzbigdataSessionFinish = true");
document.writeln("        document.getElementById(\'ylzbigdata_im_iframe\').src = \'\'");
document.writeln("    }");
document.writeln("    function ylzbigdataBtnAClick() {");
document.writeln("        if (window.navigator.userAgent.indexOf(\'MSIE 8.0\') > -1) {");
document.writeln("            ylzbigdataBtnA.style.display = \'none\'");
document.writeln("            alert(\'抱歉，该插件不支持IE8及以下版本，请使用IE8以上版本或其它浏览器\')");
document.writeln("            return");
document.writeln("        }");
document.writeln("        if (ylzbigdataAppConfigResult.webPluginBtn.dialogOpenMode === \'blank\') {");
document.writeln("            if (ylzbigdataPluginBlankDialog === null || ylzbigdataPluginBlankDialog.closed) {");
document.writeln("                ylzbigdataPluginBlankDialog = window.open(ylzbigdataQueryObj.url, \'ylzbigdataPluginBlankDialog\', \'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, left=50, top=50, width=1000, height=600\')");
document.writeln("            } else {");
document.writeln("                ylzbigdataPluginBlankDialog.focus()");
document.writeln("            }");
document.writeln("        } else if (ylzbigdataAppConfigResult.webPluginBtn.dialogOpenMode === \'newTab\') {");
document.writeln("            if (ylzbigdataPluginNewTab === null || ylzbigdataPluginNewTab.closed) {");
document.writeln("                ylzbigdataPluginNewTab = window.open(ylzbigdataQueryObj.url)");
document.writeln("            } else {");
document.writeln("                ylzbigdataPluginNewTab.focus()");
document.writeln("            }");
document.writeln("        } else {");
document.writeln("            ylzbigdataBtnA.style.display = \'none\'");
document.writeln("            ylzbigdataPanel.style.display = \'block\'");
document.writeln("            if (ylzbigdataSessionFinish) {");
document.writeln("                document.getElementById(\'ylzbigdata_im_iframe\').src = ylzbigdataQueryObj.url");
document.writeln("            }");
document.writeln("            ylzbigdataSessionFinish = false");
document.writeln("        }");
document.writeln("    }");
document.writeln("    function ylzbigdataWindowMessage(e) {");
document.writeln("        try {");
document.writeln("            var data = JSON.parse(e.data);");
document.writeln("            switch (data.method) {");
document.writeln("                case \'pullDownIm\':");
document.writeln("                    pullDownIm();");
document.writeln("                    break;");
document.writeln("                case \'closeIm\':");
document.writeln("                    closeIm();");
document.writeln("                    break;");
document.writeln("                default:");
document.writeln("                    break;");
document.writeln("            }");
document.writeln("        } catch (e) {}");
document.writeln("    }");
document.writeln("    function ylzbigdataSetStyle(result) {");
document.writeln("        // 按钮样式");
document.writeln("        // ylzbigdataBtnA.style.width = result.webPluginBtn.linkBtnWidth + \'px\'");
document.writeln("        document.getElementById(\'ylzbigdata_im_btn_text\').innerHTML = result.webPluginBtn.linkBtnText");
document.writeln("        ylzbigdataBtnA.style.backgroundColor = result.webPluginBtn.linkBtnColor || \'rgb(48, 122, 232)\'");
document.writeln("        ylzbigdataBtnA.style.marginTop = result.webPluginBtn.linkBtnMarginTop + \'px\'");
document.writeln("        ylzbigdataBtnA.style.marginLeft = result.webPluginBtn.linkBtnMarginLeft + \'px\'");
document.writeln("        ylzbigdataBtnA.style.marginRight = result.webPluginBtn.linkBtnMarginRight + \'px\'");
document.writeln("        ylzbigdataBtnA.style.marginBottom = result.webPluginBtn.linkBtnMarginBottom + \'px\'");
document.writeln("        switch (result.webPluginBtn.linkBtnPosition) {");
document.writeln("            case \'lu\':");
document.writeln("                ylzbigdataBtnA.style.left = 0 + \'px\'");
document.writeln("                ylzbigdataBtnA.style.top = 0 + \'px\'");
document.writeln("                break;");
document.writeln("            case \'mu\':");
document.writeln("                ylzbigdataBtnA.style.left = window.innerWidth / 2 + \'px\'");
document.writeln("                ylzbigdataBtnA.style.top = 0 + \'px\'");
document.writeln("                break;");
document.writeln("            case \'ru\':");
document.writeln("                ylzbigdataBtnA.style.right = 0 + \'px\'");
document.writeln("                ylzbigdataBtnA.style.top = 0 + \'px\'");
document.writeln("                break;");
document.writeln("            case \'ll\':");
document.writeln("                ylzbigdataBtnA.style.left = 0 + \'px\'");
document.writeln("                ylzbigdataBtnA.style.top = window.innerHeight / 2 + \'px\'");
document.writeln("                break;");
document.writeln("            case \'mm\':");
document.writeln("                ylzbigdataBtnA.style.left = window.innerWidth / 2 + \'px\'");
document.writeln("                ylzbigdataBtnA.style.top = window.innerHeight / 2 + \'px\'");
document.writeln("                break;");
document.writeln("            case \'rr\':");
document.writeln("                ylzbigdataBtnA.style.right = 0 + \'px\'");
document.writeln("                ylzbigdataBtnA.style.top = window.innerHeight / 2 + \'px\'");
document.writeln("                break;");
document.writeln("            case \'ld\':");
document.writeln("                ylzbigdataBtnA.style.left = 0 + \'px\'");
document.writeln("                ylzbigdataBtnA.style.bottom = 0 + \'px\'");
document.writeln("                break;");
document.writeln("            case \'md\':");
document.writeln("                ylzbigdataBtnA.style.left = window.innerWidth / 2 + \'px\'");
document.writeln("                ylzbigdataBtnA.style.bottom = 0 + \'px\'");
document.writeln("                break;");
document.writeln("            case \'rd\':");
document.writeln("                ylzbigdataBtnA.style.right = 0 + \'px\'");
document.writeln("                ylzbigdataBtnA.style.bottom = 0 + \'px\'");
document.writeln("                break;");
document.writeln("            default:");
document.writeln("                break;");
document.writeln("        }");
document.writeln("        // 弹窗样式");
document.writeln("        document.getElementById(\'ylzbigdata_im_panel\').style.width = result.webPluginDialog.imDialogWidth + \'px\'");
document.writeln("        document.getElementById(\'ylzbigdata_im_panel\').style.height = result.webPluginDialog.imDialogHeight + \'px\'");
document.writeln("        document.getElementById(\'ylzbigdata_im_panel\').style.bottom = result.webPluginDialog.imDialogBottom + \'px\'");
document.writeln("        document.getElementById(\'ylzbigdata_im_panel\').style.right = result.webPluginDialog.imDialogRight + \'px\'");
document.writeln("        ylzbigdataBtnA.style.display = \'block\'");
document.writeln("    }");
document.writeln("    function ylzbigdataCallback(resultObj) {");
document.writeln("        ylzbigdataAppConfigResult = resultObj");
document.writeln("        ylzbigdataSetStyle(resultObj)");
document.writeln("        document.body.removeChild(ylzbigdataAppConfigScript)");
document.writeln("        ylzbigdataAppConfigScript = null");
document.writeln("    }");
document.writeln("    function ylzbigdataReady(fn) {");
document.writeln("        if (document.addEventListener) {");
document.writeln("            document.addEventListener(\'DOMContentLoaded\', function() {");
document.writeln("                // 注销事件，避免反复触发");
document.writeln("                document.removeEventListener(\'DOMContentLoaded\', arguments.callee, false)");
document.writeln("                fn()");
document.writeln("            }, false)");
document.writeln("        } else if (document.attachEvent) {");
document.writeln("            document.attachEvent(\'onreadystatechange\', function() {");
document.writeln("                if (document.readyState === \'complete\') {");
document.writeln("                    document.detachEvent(\'onreadystatechange\', arguments.callee)");
document.writeln("                    fn()");
document.writeln("                }");
document.writeln("            })");
document.writeln("        }");
document.writeln("    }");
document.writeln("</script>");

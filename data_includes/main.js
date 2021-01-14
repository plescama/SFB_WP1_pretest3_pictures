
    PennController.ResetPrefix(null); // Initiates PennController
    var progressBarText = "Fortschritt"; //Changes the text of the 
    PennController.AddHost("https://amor.cms.hu-berlin.de/~plescama/SFB_C03_WP1_pretest_pictures/")                                                      
        // "https://amor.cms.hu-berlin.de/~plescama/Bild/")
    PennController.Sequence("welcome", "practice","experiment", "send", "final")
    PennController.DebugOff()
  
   

    PennController("welcome",
        defaultText
            .print()
       
        ,
        newText("text1", "<h2>Willkommen zum Experiment!</h2>")
        .settings.center()
        .settings.css("font-size", "large")

        ,
        newText("text3", "Danke, dass Du Dir die Zeit nimmst, an unserem Experiment teilzunehmen. Bevor es losgeht, brauchen wir noch ein paar Informationen von Dir.")
        .settings.center()
        .settings.css("font-size", "large")

        ,
         newText("please", "Wir bitten Dich darum, das Experiment nur in <b>Mozilla Firefox</b> oder <b>Google Chrome</b> auszuf&uuml;hren.")
        .settings.center()
        .settings.css("font-size", "large")
        ,

        newText("text2", "<p>Humboldt Universit&auml;t zu Berlin, Institut f&uuml;r Deutsche Sprache und Linguistik </p>")
        .settings.center()
        .settings.css("font-style","italic")
        ,
        newButton("button1", "Fortsetzen")
            .settings.center()
            .print()
            .wait()
        ,
        getText("text1")
            .remove()
        ,
        getText("text3")
            .remove()
        ,
        getText("please")
        .remove()
        ,
        getText("text2")
        .remove()
        ,
        getButton("button1")
            .remove()
        
        ,
        newHtml("consentInfo", "consentInfo.html")
            .settings.log()
            .print()
            .checkboxWarning("Bitte die Checkbox abhacken um fortzufahren!")
        ,
        newButton("button2", "Fortsetzen")
            .print()
            //.settings.center()
            .wait(getHtml("consentInfo").test.complete()
                .failure( getHtml("consentInfo").warn() ) // wait and display  warning message if not all the obligatory fields in the html document are filled
             )   
        ,
        getHtml("consentInfo")
            .remove()
        ,
        getButton("button2")
            .remove()
        ,
        newHtml("VPInfo", "VPInfo.html")
            .radioWarning("Bitte eine Option markieren um fortzufahren!")
            .inputWarning("Bitte das Alter in Zahlen innerhalb des Textfeldes angeben!")
            .settings.log()
            .print()
            
        ,
        newButton("button3", "Fortsetzen")
            .print()
            .wait(getHtml("VPInfo").test.complete()
                .failure( getHtml("VPInfo").warn() ) // wait and display  warning message if not all the obligatory fields in the html document are filled
             )   
        ,
        getHtml("VPInfo")
            .remove()
        ,
        getButton("button3")
            .remove()
        ,
        newHtml("instructions", "instructions.html")
            .settings.log() // log inputs in html
            .print()
        ,
        newButton("start", "&Uuml;bung starten")
            .print()
            .wait(
              getHtml("instructions").test.complete()
                .failure( getHtml("instructions").warn() )
            )
    )
        
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////     
//////// Practice trials /////////////////////////////////////////////////////////////////////////
     PennController("practice",
        newText("begin", "Beginn der &Uuml;bungsphase.")
        .settings.css("font-size", "xx-large")
        .settings.italic()
        .settings.center()
        .print()
        ,
        newText("intr", "<br><br>Bitte immer schnellstm&ouml;glich ein Bild ausw&auml;hlen. Sobald Du ein Bild ausgew&auml;hlt hast, kannst Du Deine Wahl nicht mehr &auml;ndern. <br><br> Bitte dr&uuml;cke auf die <b> Leertaste </b> um fortzufahren.")
        .settings.css("font-size", "x-large")
        .settings.center()
        .print()
        ,
        newKey("okay", " ")
        .wait()
        ,
        getText("begin")
        .remove()
        ,
        getText("intr")
        .remove()
        ,
        
        //////////////////////////////////////////Practice round 1
        
        newText("Satz1", "Welches Bild beschreibt am besten das Wort ")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
       ,
        newText("word1", "<br><strong>Teller</strong> ?")
        .settings.css("font-size", "x-large")
        .settings.css("font-weight", "bold")
        .settings.center()
        .print()
        ,
        newTimer("pr1", 1000)
        .start()
        .wait()
        ,
        newButton("Start")
        .print("center at 50vw","middle at 70vh")
        .wait()
        .settings.log()
        .remove()
        
        ,
        newSelector("image1")
        .settings.once()
        .settings.log()
        ,
        defaultImage
        .settings.size(190,190).selector("image1")
        ,
        newImage("one","Teller1.png").print("right at 45vw","bottom at 65vh"),
        newImage("two","Teller2.png").print("left at 55vw","bottom at 65vh"),
        newImage("three","Teller3.png").print("right at 45vw","top at 72vh"),
        newImage("four","Teller4.png").print("left at 55vw","top at 72vh")
        ,
        getSelector("image1")
        .wait()
        .settings.log()
        ,
        getImage("one")
        .remove()
        ,
        getImage("two")
        .remove()
        ,
        getImage("three")
        .remove()
        ,
        getImage("four")
        .remove()
        ,
        getText("Satz1")
        .remove()
        ,
        getText("word1")
        .remove()
        ,
        newTimer(1000)
        .start()
        .wait()
        ,     
        
        ///////////////////////////Practice round 2
        
        newText("Satz2", "Welches Bild beschreibt am besten das Wort")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newText("word2", "<br><strong>Kuchen</strong> ?" )
        .settings.css("font-size", "x-large")
        .settings.css("font-weight", "bold")
        .settings.center()
        .print()
        ,
        newTimer("pr2", 1000)
        .start()
        .wait()
        ,
        newButton("Start")
        .print("center at 50vw","middle at 70vh").wait()
        .settings.log()
        .remove()
        ,
        newSelector("image2")
        .settings.once()
        .settings.log()
        ,
        defaultImage
        .settings.size(190,190).selector("image2")
        ,
        newImage("one1","Kuchen1.png").print("right at 45vw","bottom at 65vh"),
        newImage("two2","Kuchen2.png").print("left at 55vw","bottom at 65vh"),
        newImage("three3","Kuchen3.png").print("right at 45vw","top at 72vh"),
        newImage("four4","Kuchen4.png").print("left at 55vw","top at 72vh")
        ,
        getSelector("image2")
        .wait()
        .settings.log()
        ,
        getImage("one1")
        .remove()
        ,
        getImage("two2")
        .remove()
        ,
        getImage("three3")
        .remove()
        ,
        getImage("four4")
        .remove()
        ,    
        getText("Satz2")
        .remove()
        ,
        getText("word2")
        .remove()
        ,
        newTimer(1000)
        .start()
        .wait()
        ,
        newText("end", "Ende der &Uuml;bungsphase. Bitte dr&uuml;cke auf die <strong>Leertaste</strong> um das Experiment zu beginnen.")
        .settings.css("font-size", "x-large")
        .print()
        ,
        newKey(" ")
          .settings.log() // Anfang des Experiments
          .wait()
        ,
        getText("end")
         .remove()
       

        )     
 
       
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////     
//////// Experiment starts with Template /////////////////////////////////////////////////////////
        
   PennController.Template(
     variable => PennController("experiment",
        
         newTimer(500)
         .start()
         .wait()
         ,
         newText("Satz", variable.Satz)
        .settings.css("font-size", "x-large")
        .settings.center()
        .print()
        ,
        newText("blanky", "<br>")
        .print()
        ,
        newText("Wort", variable.Wort)
        .settings.css("font-size", "x-large")
        .settings.center()
        .print()
        ,
        newTimer(1000)
       .start()
       .wait()
        ,
        newButton("Start").print("center at 50vw","middle at 70vh")
        .wait()
        .settings.log()
        .remove()
        ,
        newSelector("image")
        .settings.once()
        .settings.log()// time is logged for the moment when a decision has been made
        ,
        defaultImage
        .settings.size(200,200).selector("image")
        ,
        newImage(variable.Bild1).print("right at 45vw","bottom at 65vh"),
        newImage(variable.Bild2).print("left at 55vw","bottom at 65vh"),
        newImage(variable.Bild3).print("right at 45vw","top at 72vh"),
        newImage(variable.Bild4).print("left at 55vw","top at 72vh")
        ,
        getSelector("image").wait().settings.log()
        ,
        newTimer(300)
        .start()
        .wait()

        
        )// PC experiment bracket
        .log("List",variable.List)
        .log("Item",variable.Trial)
        .log("Trial",variable.Item)
        .log("Register",variable.Register)
        .log("Wort", variable.Wort)
      
   
        ); // template bracket
        
    

//////////////////////////////////////////////////////////////////////////////////////////////////     
//////// Send Results Screen  ///////////////////////////////////////////////////////////////////
        
   PennController.SendResults("send")
        
//////////////////////////////////////////////////////////////////////////////////////////////////
//////// Final Screen  ///////////////////////////////////////////////////////////////////////////
        
   PennController("final",
    newText("<h2> Das ist das Ende des Experimentes. Vielen Dank f&uuml;r Deine Teilnahme!</h2>")
    .print()
     ,   
    newCanvas("empty6", 1, 10)
    .print()
    ,
    newText("Code", " <p><font size = '4'><b>Wichtiger Hinweis:</b></font></p> <p><font size = '4'> Bitte kopiere den folgenden Code und f&uuml;ge ihn in das daf&uuml;r vorgesehene Feld innerhalb Deines Clickworker-Aufgabenformulars ein.</font></p> <p><font size = '4'> Ohne die Eingabe dieses Codes kann eine Gutschrift Deines Honorars nicht erfolgen!</font></p>")
    .print()
    ,
    newCanvas("empty7", 1, 5)
    .print()   
    ,
    newText("Code2", "<b><font size = '4'> Code: BILDVERGL20II </font></b>")
    .print()
    ,
    newButton("void")
    .wait()  
     )   
   

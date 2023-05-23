// fonction appelée lorsque l'utilisateur valide la saisie du formulaire
function valider()
{
	var champsRequis = document.getElementsByClassName('required');
	
	for (let champ of champsRequis){
        if (champ.value == ""){
            alert("Le champ " + champ.name + " est requis");
        }
    }
    
	nb_question_vide = 0;
    for (var i=1; i<21; i++)
    {
		var numero_question = "Q" + i.toString();
		var reponse = getRadioValue(numero_question);
		var question_element = document.getElementById("question" + i.toString());
		if (reponse == "")
		{
			question_element.style.color="red";
			nb_question_vide = nb_question_vide + 1;
		}
		else
		{
			question_element.style.color="black";
		}			
	}
	
	if(nb_question_vide > 0)
	{
			alert("Il faut donner une réponse au question en rouge");
	}
	else
	{
		document.getElementById('formulaire').submit();
	}
}

function getRadioValue(radioName)
{
	var valeur = "";
	var radio_elements = document.getElementsByName(radioName);
	
	for (i=0; i<radio_elements.length; i++)
    {
		if ( radio_elements[i].checked )  { valeur = radio_elements[i].value ;  break; }
    }	
	return valeur;
	
}

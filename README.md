# _Pig-Latin Translator_

#### _Translates inputted text to Pig-Latin_

#### By _**Brian Pritt & Luke Philips**_

## Description

_This program uses the following methodology to translate into Pig-Latin:_

* behavior -	input ex -	output ex
* do nothing to non-letters -	7 -	7
* add "ay" to single letter words beginning with a vowel -	a -	aay
* add "ay" to multi letter words beginning with a vowel -	ear -	earay
* remove first consonant and add ay to words beginning with a single consonant followed by a vowel -	have -	avehay
* remove multiple consonant phoneme and add ay to words beginning with a multiple consonant phonemes followed by a vowel -	choice -	oicechay
* treat y as a vowel, and remove first consonant and add ay to words with y NOT as the first letter -	pay -	aypay
* remove Y and add ay to  words beginning with Y as a consonant -	yell -	ellyay
* words that begin with q and are followed by u, move qu to the end and add ay -	queen -	eenquay
* words where qu follows a consonant at the beginning, move consonant +qu to the end, add ay -	squeeze -	eezesquay
* retain any capitialization, regardless of position -	Foot -	ootFay
* treat multiple words as separate instances -regardless of starting letters -	dog man -	ogday anmay


## Setup/Installation Requirements

* There are no special setup or installation requirements.


## Known Bugs

_TBD_

## Support and contact details

_Contact information: brianpritt@example.com_

## Technologies Used

_Technologies used in this version include the following:
* jQuery 3.1.1
* JavaScript


### License

*Licensed under GPLv3*

Copyright (c) 2016 **_ Brian Pritt & Luke Philips_**

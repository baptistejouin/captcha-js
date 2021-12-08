//L'index 0 est l'id qui va	relier l'image et l'objet, le second est uniquement de l'utilisateur, afin qu'il trouve par lui même la combinaison.
//On peut ajouter des éléments si on le souhaite
const imagesObj = [
		['1', 'https://s2.qwant.com/thumbr/0x0/5/8/82b30ee51fc3521447786d06cf3237d206766c455e381fe397facbe734e699/b6f27aaece372e7f87b400fcf9e1f25b.png?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb6%2Ff2%2F7a%2Fb6f27aaece372e7f87b400fcf9e1f25b.png&q=0&b=1&p=0&a=0'],
		['2', 'https://s2.qwant.com/thumbr/0x0/c/2/c0778abb17ff4099f8809942dfa67776f57660d9d84771cfbee680f17bec28/170x125-37150.jpg?u=https%3A%2F%2Fmedia.toucharger.com%2Fweb%2Ftoucharger%2Fupload%2Fimage_domain%2F3%2F7%2F37150%2F170x125-37150.jpg&q=0&b=1&p=0&a=0'],
		['3', 'https://s1.qwant.com/thumbr/0x0/a/c/e5572d1fad1982d177d2b067c952e03548bbf12c564594d4d9cde6b529769e/giraffe-head-5-ruth-hallam.jpg?u=https%3A%2F%2Frender.fineartamerica.com%2Fimages%2Frendered%2Fsmall%2Fposter%2F8%2F8%2Fbreak%2Fimages-medium%2Fgiraffe-head-5-ruth-hallam.jpg&q=0&b=1&p=0&a=0'],
		['4', 'https://s2.qwant.com/thumbr/0x0/7/7/86474b3bf78fa9614bfeaa547262f96f167935e5f405f40945e5e185a681b1/png-hd-bee--192.png?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fpng-hd-bee--192.png&q=0&b=1&p=0&a=0'],
		['5', 'https://s2.qwant.com/thumbr/0x0/6/6/fbceefd6340c43565d5086d4ef089fa7ea4029204f353c33321f1326692ce0/european_otter_thumb.jpg?u=https%3A%2F%2Fkeyassets.timeincuk.net%2Finspirewp%2Flive%2Fwp-content%2Fuploads%2Fsites%2F8%2F2014%2F02%2Feuropean_otter_thumb.jpg&q=0&b=1&p=0&a=0'],
		['6', 'https://s1.qwant.com/thumbr/0x0/3/5/8f11ddc1a03a9b65ccb27fcd0af633a156152bd40db525f7465ac5522857cb/flamant%20rose%20Chili.jpg?u=http%3A%2F%2Fwww.anidif.com%2Fimages%2FEspeces%2Fflamant%2520rose%2520Chili.jpg&q=0&b=1&p=0&a=0'],
		['7', 'https://s2.qwant.com/thumbr/0x0/c/a/f573020a40793dd21e8f86727ba9d1d31af18b241328685935461dfb628676/blackbear.jpg?u=http%3A%2F%2Fchurchillfalls.ca%2Fwp-content%2Fuploads%2F2015%2F12%2Fblackbear.jpg&q=0&b=1&p=0&a=0'],
		['8', 'https://s1.qwant.com/thumbr/0x0/1/1/c45dd4d4fcf8e706eb468fceacdb3eab91e4683e2a6023dc043edb92c451ad/tanked-fish-pictures3.jpg?u=http%3A%2F%2Fr.ddmcdn.com%2Fs_f%2Fo_1%2Fcx_87%2Fcy_0%2Fcw_450%2Fch_450%2Fw_162%2FAPL%2Fuploads%2F2014%2F06%2Ftanked-fish-pictures3.jpg&q=0&b=1&p=0&a=0'],
		['9', 'https://s2.qwant.com/thumbr/0x0/d/6/a6d4ecb563592d93708a88cc038ef3558a8cf4868583a5aa85c57c5a478964/langouste.18412.gif?u=https%3A%2F%2Fimages.toucharger.com%2Fimg%2Fgraphiques%2Fgifs_animes%2Fanimaux%2Fpoissons%2Flangouste.18412.gif&q=0&b=1&p=0&a=1']
	],
	textsObj = [
		['1', 'Éléphant'],
		['2', 'Dauphin'],
		['3', 'Giraffe'],
		['4', 'Abeille'],
		['5', 'Loutre'],
		['6', 'Flamant rose'],
		['7', 'Ours'],
		['8', 'Poisson'],
		['9', 'Langouste']
	],
	proposals = document.querySelector('.proposals'),
	photos = document.querySelector('.photos'),
	templateProposalItem = document.querySelector('#template-proposal-item'),
	templatePhoto = document.querySelector('#template-photo');

function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

let clone, cloneObj = [...textsObj];

// On peut changer le "5", c'est le nombre de question du capchat que l'utilisateur devra résoudre.
for (let i = 0; i < 5; i++) {
	const rng = getRandomInt(0, cloneObj.length - 1);

	clone = document.importNode(templateProposalItem.content, true);
	clone.querySelector('.proposal-text').textContent = cloneObj[rng][1];
	clone.querySelector('.proposal-text').setAttribute('data-proposal', cloneObj[rng][0]);
	proposals.appendChild(clone);

	// Activer seulement si on ne veux pas de répétition, ici on choisi de les garder.
	// cloneObj.splice(rng, 1);
}

cloneObj = [...imagesObj];

for (let i = 0; i < imagesObj.length; i++) {
	const rng = getRandomInt(0, cloneObj.length - 1);

	clone = document.importNode(templatePhoto.content, true);
	clone.querySelector('.photo').setAttribute('src', cloneObj[rng][1]);
	clone.querySelector('.photo').setAttribute('data-image', cloneObj[rng][0]);
	photos.appendChild(clone);

	//On souhaite ne pas avoir de répétitions d'image
	cloneObj.splice(rng, 1);
}

const proposal = document.querySelectorAll('.proposal'),
	photo = document.querySelectorAll('.photo'),
	captchatResult = document.querySelector('.captcha-result');

proposal.forEach((elt) => {
	elt.addEventListener('click', () => {
		proposal.forEach((elt) => {
			elt.classList.remove('active');
		});
		elt.classList.add('active');
	});
});

photo.forEach((elt) => {
	elt.addEventListener('click', () => {
		const proposalActive = document.querySelector('.proposal.active'),
			img = elt.cloneNode(false);
		img.setAttribute('class', 'preview-img');
		img.addEventListener('click', () => {
			img.parentElement.innerHTML = '?';
		});
		proposalActive.parentElement.querySelector('.proposal-preview').innerHTML = '';
		proposalActive.parentElement.querySelector('.proposal-preview').appendChild(img);
	});
});

const modal = document.querySelector('.modal');

submit.addEventListener('click', (e) => {
	e.preventDefault();

	let result = true;
	try {
		proposal.forEach((elt) => {
			if (!(elt.parentElement.querySelector('.preview-img').dataset.image == elt.parentElement.querySelector('.proposal-text').dataset.proposal)) result = false;
		});
	} catch (error) {
		result = false;
	}
	if (result) {
		captchatResult.innerHTML = '<span style="color:green">Le captcha est validé</span>';
		modal.style.display = 'flex';
		return
	}
	captchatResult.innerHTML = '<span style="color:red">Le captcha n\'est pas bon.</span>';
});

password.addEventListener('input', (e) => {
	const value = e.target.value;

	if (value.match(/[A-Z]/)) cmaj.classList.remove('error');
	else cmaj.classList.add('error');
	if (value.match(/[a-z]/)) cmin.classList.remove('error');
	else cmin.classList.add('error');
	if (value.match(/\d/)) cd.classList.remove('error');
	else cd.classList.add('error');
	if (value.match(/.{8,}/)) cn.classList.remove('error');
	else cn.classList.add('error');
});
$(document).ready(function() {
	socket.emit('plugins.mentions.listGroups', function(err, groupNames) {
		Mentions.groups = groupNames;
	});

	$(window).on('action:composer.loaded', function(e, data) {
		var composer = $('#cmp-uuid-' + data.post_uuid + ' .write'),
			DOMusers = [];

		// Retrieve DOM users
		$('.posts [data-pid] .username-field').each(function(idx, el) {
			var	username = el.getAttribute('data-username');
			if (DOMusers.indexOf(username) === -1) {
				DOMusers.push(username);
			}
		});

	});
});

(function(window) {
	window.Mentions = {
		groups: null
	};
})(window);

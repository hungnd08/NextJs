export default function form_submit(req, res) {
    if (!req.body.params.first || !req.body.params.last) {
        return res.status(400).json({ error: 'First or last name not found' });
    }
	res.status(200).json({ name: req.body.params.first + " " + req.body.params.last });
}

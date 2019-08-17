const getEmailTemplate = data =>
  `<b>New Message From Website</b>
<h3>Info:</h3>
<ul>
    <li>Name: ${data.name}</li>
    <li>Email: ${data.email}</li>
    <li>Message: ${data.body}</li>
</ul>`;

module.exports = getEmailTemplate;

/**
 * 
 * @param {number} contactId
 * @returns
 */

class Contact{
  id;
  name;
  birthDate;
}

async function getContact(contactId) {
  const resp = await $.ajax({
    url: `/contacts/${contactId}`,
    dataType: "json",
  });
}
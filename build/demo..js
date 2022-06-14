/**
 *
 * @param {number} contactId
 * @returns
 */
class Contact {
}
async function getContact(contactId) {
    const resp = await $.ajax({
        url: `/contacts/${contactId}`,
        dataType: "json",
    });
}

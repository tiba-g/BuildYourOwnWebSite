function validateNameLength()
{
    var name = document.myForm.Name.value;
    if ((name.length > 30 || name.length < 3))
    {
        alert("The name must be at least 3 chars and less than 30 chars!");
        return false;
    }
    return true;
}

function validateNameHasWhiteSpace()
{
    var name = document.myForm.Name.value;
    if (name.search("^[a-zA-Z]+( [a-zA-Z]+)*$"))
    {
        alert("Your name should contains space between first and last name!");
        return false;
    }
}

function validateEmail()
{
    var email = document.myForm.Email.value;
    if (!email.search(".*\.(hu|com)$"))
    {
        alert("The email address is not valid!");
        return false;
    }
    return true;
}

function sendMessage()
{
    var email = document.myForm.Email.value;
    var name = document.myForm.Name.value;
    var message = document.myForm.textarea.value;
    alert("Your message was sent!");
}

function validateContactData()
{
    var validation = true;
    validation &= validateNameLength();
    validation &= validateNameHasWhiteSpace();
    validation &= validateEmail();
    if (validation)
    {
        sendMessage();
        return true;
    }
    else
    {
        return false;
    }
}

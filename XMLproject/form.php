<?php


$xmldoc = new DOMDocument();
    $xmldoc->load('Data.xml');
$domlength=$xmldoc->getElementsByTagName('employee')->length;
  if(isset($_POST["next"]))
   {
      nextemployee();
   }
function nextemployee()
{

   global $domlength;
   if(isset($_COOKIE["count"]))
   {

      if($_COOKIE['count']>=$domlength-1)
      {
         $cookie=0;
         $_COOKIE['count']=$cookie;
        
      }
      else
      {
         $cookie = ++$_COOKIE['count'];
        

      }
      setcookie('count', $cookie, time() + (86400 * 30), "/");
     
   }
   else
   {
      $cookie = 0;
      
      setcookie('count', $cookie, time() + (86400 * 30), "/");
      $_COOKIE['count']=0;
    
   }
    $xmldoc = new DOMDocument();
    $xmldoc->load('Data.xml');
    $xpath = new DOMXPath($xmldoc);
    $thedocument = $xmldoc->documentElement;
    $employee = $thedocument->getElementsByTagName('employee');
    $nameValue = $employee[$_COOKIE['count']]->getElementsByTagName('name');
    $phoneValue = $employee[$_COOKIE['count']]->getElementsByTagName('phone');
    $addressValue = $employee[$_COOKIE['count']]->getElementsByTagName('address');
    $emailValue = $employee[$_COOKIE['count']]->getElementsByTagName('email');
    


}
if(isset($_POST["pre"]))
   {
      previousemployee();
   }
function previousemployee()
{

  
   global $domlength;
   if(isset($_COOKIE["count"]))
   {
       if($_COOKIE['count']<=0)
       {
         $cookie = 0;
       
       }
       else
       {
         $cookie = --$_COOKIE['count'];
       }
      
      setcookie("count", $cookie, time() + (86400 * 30), "/");
     
   }
   else
   {
      $cookie = 0;
     
      setcookie('count', $cookie, time() + (86400 * 30), "/");
    
   }
    $xmldoc = new DOMDocument();
    $xmldoc->load('Data.xml');
    $xpath = new DOMXPath($xmldoc);
    $thedocument = $xmldoc->documentElement;
    $employee = $thedocument->getElementsByTagName('employee');
    $nameValue = $employee[$_COOKIE['count']]->getElementsByTagName('name');
    $phoneValue = $employee[$_COOKIE['count']]->getElementsByTagName('phone');
    $addressValue = $employee[$_COOKIE['count']]->getElementsByTagName('address');
    $emailValue = $employee[$_COOKIE['count']]->getElementsByTagName('email');
    


}

   if(isset($_POST["delete"]))
   {
      delete();
   }

   function delete()
   {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $address = $_POST['address'];

    $xmldoc = new DOMDocument();
    $xmldoc->load('Data.xml');
    $xpath = new DOMXPath($xmldoc);
    $thedocument = $xmldoc->documentElement;
    $employee = $thedocument->getElementsByTagName('employee');


    $nodeToRemove = null;
   foreach ($employee as $domElement)
   {
    $nameValue = $domElement->getElementsByTagName('name');
    if (strcmp($nameValue[0]->textContent,$name) == 0)
     {

     $nodeToRemove = $domElement; 
    echo $nameValue[0]->textContent;
     }

     }
     if ($nodeToRemove != null)
     {
      $thedocument->removeChild($nodeToRemove);
      --$_COOKIE["count"];
      
   }

   $xmldoc->save('Data.xml');
   }
   function insert()
   {
    $xmldoc = new DOMDocument();
    $xmldoc->load('Data.xml');

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $root = $xmldoc->firstChild;

    $employee = $xmldoc->createElement('employee');
    $root->appendChild($employee);

    $nameroot = $xmldoc->createElement('name');
    $employee->appendChild($nameroot);
    $name = $xmldoc->createTextNode($name);
    $nameroot->appendChild($name);

    $phoneroot = $xmldoc->createElement('phone');
    $employee->appendChild($phoneroot);
    $phone = $xmldoc->createTextNode($phone);
    $phoneroot->appendChild($phone);
    
    $addressroot = $xmldoc->createElement('address');
    $employee->appendChild($addressroot);
    $address= $xmldoc->createTextNode($address);
    $addressroot->appendChild($address); 

    $emailroot = $xmldoc->createElement('email');
    $employee->appendChild($emailroot);
    $email= $xmldoc->createTextNode($email);
    $emailroot->appendChild($email); 

    $xmldoc->save('Data.xml');
   }
   if(isset($_POST["insert"]))
   {
      insert();
   }
   if(isset($_POST["search"]))
   {
      search();
   }
   function search()
   {
    $xmldoc = new DOMDocument();
    $xmldoc->load('Data.xml');
    $name = $_POST['name'];
    
    $names = $xmldoc->getElementsByTagName('name');
    $phones = $xmldoc->getElementsByTagName('phone');
    $emails = $xmldoc->getElementsByTagName('email');
    $addresses = $xmldoc->getElementsByTagName('address');
    $i=0;
    $flag=0;
    foreach ($names as $domElement)
   {
       $i++;

     if (strcmp($domElement->textContent,$name) == 0)
     {  $flag=1; 
        $_COOKIE['count']=$i-1;
        echo $_COOKIE['count'];
    
     }
     
   }
   if($flag==0)
   echo "not found";
   
    
   }
   if(isset($_POST["update"]))
   {
      update();
   }
   function update()
   {
    $xmldoc = new DOMDocument();
    $xmldoc->load('Data.xml');
    $count=$_COOKIE['count'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $names = $xmldoc->getElementsByTagName('name');
    $phones = $xmldoc->getElementsByTagName('phone');
    $emails = $xmldoc->getElementsByTagName('email');
    $addresses = $xmldoc->getElementsByTagName('address');
    $names[$count]->textContent=$name ;
    $phones[$count]->textContent=$phone ;
    $emails[$count]->textContent=$email ;
    $addresses[$count]->textContent=$address ;
    $xmldoc->save('Data.xml');
   
}

function getvalue($field)
    {
       if(isset($_COOKIE['count']))
       {
         $count=$_COOKIE['count'];
       }
       else
       $count=0;
      
       $xmldoc = new DOMDocument();
       $xmldoc->load('Data.xml', LIBXML_NOBLANKS);
      $path = new DOMXPath($xmldoc);
       $names = $xmldoc->getElementsByTagName('name');
       $phones = $xmldoc->getElementsByTagName('phone');
       $addresses = $xmldoc->getElementsByTagName('address');
       $emails = $xmldoc->getElementsByTagName('email');
      if(isset($_POST[$field]))
      {
       if($field=="name")
       {
          echo  $names[$count]->textContent;
         
       }
       if($field=="phone")
       {
          echo  $phones[$count]->textContent;
         
       }
       if($field=="address")
       {
          echo  $addresses[$count]->textContent;
         
       }
       if($field=="email")
       {
          echo  $emails[$count]->textContent;
         
       }
       
    } 
    else
    {
      echo " " ;
    }
   }
?>

<html>
   <head>
   <link rel="stylesheet" href="style.css">
</head>
 <body>
    <div class="container">
<form method="post">
  <label> Name </label><input type="text"  name="name"value="<?php getvalue("name")?>"/><br><br>
  <label> Phone </label><input type="text" name="phone"value="<?php getvalue("phone")?>"/><br><br>
   <label>Address</label><input type="text" name="address"value="<?php getvalue("address")?>"/><br><br>
  <label> Email</label> <input type="text" name="email"value="<?php getvalue("email")?>"/><br><br>
   
   <input class="button"type="submit" name ="insert"value="insert"/>
   <input class="button"type="submit" name ="delete"value="delete"/>
   <input class="button"type="submit" name ="search"value="search"/>
   <input class="button"type="submit" name ="update"value="update"/><br><br>
   <input class="button"type="submit" name ="next"value="next"/>
   <input class="button"type="submit" name ="pre"value="previous"/>
</form>
</div>



 </body>


</html>

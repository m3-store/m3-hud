# لا تغير اسم السكربت

AR = العربية

كيفيفة تركيب الهود اذهب الى 
qb-smallresources
وثم اذهب الى اخر سطر وحط الكود التالي fxmanifest وبعدها ملف بأسم 

```lua
exports {
    'HasHarness',
    'HasSeatbelt'
}
```
وإضافة الكود التالي في اي مكان seatbealt وثم client الخطوة الثاني اذهب الى ملف بأسم
```lua
function HasSeatbelt()
    return seatbeltOn
end
```

# Don't Change Name Script
EN = English

How to install the HUD:
Go to the qb-smallresources folder.

Then go to the last line in the fxmanifest.lua file and add the following code:

```lua
exports {
    'HasHarness',
    'HasSeatbelt'
}
```
In the second step, go to the client file and add the following code in any suitable location:

```lua
function HasSeatbelt()
    return seatbeltOn
end
```

FR = Français

Comment installer le HUD :

Allez dans le dossier qb-smallresources.

Ensuite, allez à la dernière ligne du fichier fxmanifest.lua et ajoutez le code suivant :

```lua
exports {
    'HasHarness',
    'HasSeatbelt'
}
```
Deuxième étape, allez dans le fichier client et ajoutez le code suivant à un endroit approprié :

```lua
function HasSeatbelt()
    return seatbeltOn
end
```

ES = Español

Cómo instalar el HUD:

Ve a la carpeta qb-smallresources.

Luego ve a la última línea en el archivo fxmanifest.lua y agrega el siguiente código:

```lua
exports {
    'HasHarness',
    'HasSeatbelt'
}
```
En el segundo paso, ve al archivo client y añade el siguiente código en cualquier lugar adecuado:

```lua
function HasSeatbelt()
    return seatbeltOn
end
```

By : Abo3of - Discord.gg/m3s

Provide external devices and extensions to Stemblock.

## Contribute

Please visit the wiki: https://stemcity.in/ to learn how to make a resource.

Notice that offical attributes can only be officially marked by the community, please do not add the offical attribute to the extension of pr.

## Localization

All resources marked as offical will be included in the official translation maintenance list, do not modify the translation file content of these files directly. You should apply to join the StemBlock team on transifex to translate these content

## Pack

- MacOS

    ``` bash
    ./buildResources/build-pkg.sh VERSION="1.0.0"
    ```

- Linux

    You need to Run `sudo apt install -y dpkg-deb` to install `dpkg-deb` first.

    ``` bash
    ./buildResources/build-deb.sh -v"1.0.0"
    ```

- Windows

    You need to install [Inno Setup](https://jrsoftware.org/isinfo.php) first
    Note that you should use cmd to run instead of powershell.

    - Use CMD

        ``` bat
        "C:\Program Files (x86)\Inno Setup 6\ISCC.exe" /dVersion="1.0.0" "./buildResources/setup.iss"
        ```

    - Or Powershell

        ``` powershell
        & "C:\Program Files (x86)\Inno Setup 6\ISCC.exe" /dVersion="1.0.0" "./buildResources/setup.iss"
        ```

## Customization

Visi: [https://stemcity.in/developer-guide/customize-external-resource](https://stemcity.in/developer-guide/customize-external-resource)

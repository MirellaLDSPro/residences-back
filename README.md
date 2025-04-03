Caso o npm esteja desativado no seu ambiente de desenvolvimento você pode estar recebendo o erro a seguir:

`npm : O arquivo C:\Program Files\nodejs\npm.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema. Para obter mais informações, consulte about_Execution_Policies em https://go.microsoft.com/fwlink/?LinkID=135170. No linha:1 caractere:1`

Execute o comando:
`Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`

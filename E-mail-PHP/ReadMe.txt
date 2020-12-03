1. Копируешь содержимое файла script.js и переносишь в .js файл своего проекта.
2. Копируешь файл mail.php и вставляешь в корень своего проекта (рядом с index.html вначале).
3. В index.html рядом с формой вставляешь это:

	<!-- Hidden Required Fields -->
        <input type="hidden" name="project_name" value="Logotype">
        <input type="hidden" name="admin_email" value="kabdulokh@bk.ru">
        <input type="hidden" name="form_subject" value="about form">
        <!-- END Hidden Required Fields -->

4. Каждому из своих input пишешь name и соответствующее название, например:

	<label for="#">
            	E-mail
        	<input name="e-mail" type="text">
        </label>
        <label for="#">
            	Сообщение
            	<input name="Сообщение" type="text">
        </label>
/**
 * Translation.
 *
 * Defines Japanese translation.
 *
 * @file   This files defines Japanese translation.
 * @author Author: Emic Corporation.
 * @since  1.3.0
 */

/* eslint-disable quote-props */
export const translations = [
	{
		lang: 'ja',
		words: [
			{ 'FMPress Forms Editor': 'FMPress Forms エディター' },
			{ 'Back to CF7': 'CF7に戻る' },
			{ 'Start over': '最初からやり直す' },
			{ 'Data source: ': 'データソース: ' },
			{ 'Layout: ': 'レイアウト: ' },
			{ 'Welcome !': 'ようこそ！' },
			{ 'Continue': '続行' },
			{ 'Cancel': '中止' },
			{ 'Confirmation': '確認' },
			{ 'Cannot save': '保存できません' },
			{ 'To add a field to a form item, press the plus inside the field item.': 'フォーム項目にフィールドを追加するには、フィールド項目内にあるプラスを押します。' },
			{ 'Form items are collapsed by pressing the heading. They can also be reordered by drag-and-drop.': 'フォーム項目は見出しを押すと折りたたまれます。また、ドラッグ&ドロップで順番を入れ替えられます。' },
			{ 'It appears that FileMaker data source and layout are not set up, please go to FMPress tab and set them up.': 'FileMaker のデータソースとレイアウトが設定されていないようです。FMPressタブに移動して設定してください。' },
			{ 'To create a form in FMPress Forms, you need to add the name of a field or list of values from the FileMaker database to a form tag in Contact Form 7, and there are some rules for this. FMPress Forms editor allows you to do this through a GUI.': 'FMPress Forms でフォームを作成するためには、Contact Form 7 のフォームタグに FileMaker データベースのフィールド名や値一覧名を追加する必要があり、これにはいくつかのルールがあります。FMPress Forms エディターはこの作業をGUIで行えます。' },
			{ 'Important: To restore a form, press Restore button before pressing Save button. Once save button is pressed, the form cannot be restored.': '重要: フォームを元の状態に戻すには、保存ボタンを押す前に「元に戻す」ボタンを押してください。保存ボタンを押した後は元の状態には戻せません。' },
			{ 'Forms created in FMPress Forms Editor will override Contact Form 7 forms. Currently, Contact Form 7 forms have form definitions. If you are sure there is no problem with overwriting it, press Continue.': 'FMPress Forms エディターで作成したフォームは Contact Form 7 のフォームを上書きします。現在、Contact Form 7 のフォームにはフォームの定義があります。これを上書きして問題がないのであれば続行を押してください。' },
			{ 'Let\'s start.': '始めましょう' },
			{ 'switched to FMPress Forms editor, which accesses the FileMaker layout to create a list of fields and place them in the left pane. Start editing your form (note that if you reload your web browser, you will lose the content you created in FMPress Forms editor).': 'FMPress Forms エディターに切り替えました。FMPress Forms エディターは FileMaker のレイアウトにアクセスしてフィールドの一覧を作成し左ペインに設置しました。フォームの編集を始めましょう（なお、Web ブラウザーをリロードすると FMPress Forms エディターで作成した内容は失われますのでご注意ください）。' },
			{ 'Back to CF7. Edits made in FMPress Forms editor will not be saved until you press Save.': 'CF7 に戻ります。保存を押すまでは FMPress Forms エディターで編集した内容は保存されません。' },
			{ 'Save your edits in FMPress Forms editor. The current Contact Form 7 form will be overwritten (if you press save, you will not be able to return to the state before the overwrite). From now on, use Contact Form 7\'s form editor to edit the form.': 'FMPress Forms エディターで編集した内容を保存します。今ある Contact Form 7 のフォームは上書きされます（保存を押した場合は、上書き前の状態には戻せません）。以降、フォームを編集する場合は Contact Form 7 のフォームエディターを利用してください。' },
			{ 'Correct any items with errors before saving.': '保存する前にエラーのある項目を修正してください。' },
			{ 'Cannot save because there are no form elements.': 'フォーム要素がないため保存できません。' },
			{ 'Start editing': '編集を始める' },
			{ 'Save': '保存' },
			{ 'Fields': 'フィールド項目' },
			{ 'Form': 'フォーム項目' },
			{ 'Type:': 'タイプ:' },
			{ 'NotEmpty:': '空欄不可:' },
			{ 'Value list:': '値一覧:' },
			{ 'editText': 'テキスト' },
			{ 'popupList': 'ドロップダウンリスト' },
			{ 'popupMenu': 'ポップアップメニュー' },
			{ 'checkBox': 'チェックボックス' },
			{ 'radioButtons': 'ラジオボタン' },
			{ 'calender': 'ドロップダウンカレンダー' },
			{ 'secureText': 'マスク付き編集ボックス' },
			{ 'Label': 'ラベル' },
			{ 'Required': '必須項目' },
			{ 'Radio is always a requirement.': 'フォームタグのタイプでラジオボタンを選択した場合、この項目にチェックが入っていなくても必須項目と判断されます。' },
			{ 'CF7 Form-tag type': 'フォームタグのタイプ' },
			{ 'CF7 Form-tag name': 'フォームタグの名前' },
			{ 'Id Attribute': 'Id 属性' },
			{ 'Class Attributes': 'クラス属性' },
			{ 'Value list name': '値一覧名' },
			{ 'Filetypes': 'ファイルタイプ' },
			{ 'Limit': 'ファイルサイズ' },
			{ 'Delete': '削除' },
			{ 'Specify a unique name.': '一意な名前を指定します。' },
			{ 'Use alphanumeric characters, hyphens and underscores.': '半角の英数字、ハイフン、アンダースコアが使えます。' },
			{ 'Name of value list specified in FileMaker.': 'FileMaker で指定された値一覧の名前。' },
			{ 'If there is more than one, separate them with a space.': '複数ある場合は半角スペースで区切ってください。' },
			{ 'This format cannot be used.': '利用できない形式です。' },
			{ 'The required prefix (fm_field-) is automatically added.': '必要な接頭辞（fm_field-）は自動的に付加されます。' },
			{ 'The required prefix (data:fm_value_list-) is automatically added.': '必要な接頭辞（data:fm_value_list-）は自動的に追加されます。' },
			{ 'Enter the file extension or MIME type. If there are multiple files, concatenate them with | (e.g. txt|application/pdf).': '拡張子またはMIMEタイプを入力します。複数ある場合は|で連結します（例: txt|application/pdf）。' },
			{ 'Enter the file size and units (e.g., 10MB).': 'ファイルサイズと単位を入力します（例: 10MB）。' },
			{ 'Text (Single line text)': '単一行テキスト' },
			{ 'Textarea (Multi line text)': '複数行テキスト' },
			{ 'Email': 'メールアドレス' },
			{ 'Number': '数字' },
			{ 'Date': '日付' },
			{ 'Select': 'ドロップダウンメニュー' },
			{ 'Checkbox': 'チェックボックス' },
			{ 'Radio': 'ラジオボタン' },
			{ 'File': 'ファイル' },
			{ 'Generate form-tag': 'フォームタグを生成' },
			{ 'Restore': '元に戻す' },
			{ 'Failed to save form.': 'フォームの保存に失敗しました。' },
			{ 'Error': 'エラー' },
			{ 'Close': '閉じる' },
			{ 'Required field.': '必須項目です。' },
			{ 'This name is already in use.': 'この名前は既に使われています。' },
			{ 'Contains unavailable characters.': '利用できない文字が含まれています。' },
			{ 'Value list name not specified.': '値一覧の名前を設定してください。' },
			{ 'Do not show this dialog': '次回から表示しない' },
			{ 'Yes': 'はい' },
			{ 'No': 'いいえ' },
		],
	},
];
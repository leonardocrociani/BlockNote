import { TextSelection } from "@tiptap/pm/state";
import { RiArrowGoBackFill } from "react-icons/ri";

import { useComponentsContext } from "../../../editor/ComponentsContext";
import { useBlockNoteEditor } from "../../../hooks/useBlockNoteEditor";
import { useDictionary } from "../../../i18n/dictionary";
import { AIInlineToolbarProps } from "../AIInlineToolbarProps";
import { Block } from "@blocknote/core";

export const RevertButton = (
  props: AIInlineToolbarProps & {
    originalBlocks: Block<any, any, any>[];
  }
) => {
  const dict = useDictionary();
  const Components = useComponentsContext()!;

  const editor = useBlockNoteEditor<any, any, any>();

  if (!editor.isEditable) {
    return null;
  }

  return (
    <Components.AIInlineToolbar.Button
      className={"bn-button"}
      icon={<RiArrowGoBackFill />}
      mainTooltip={dict.ai_inline_toolbar.revert}
      label={dict.ai_inline_toolbar.revert}
      onClick={() => {
        editor.aiInlineToolbar.close();

        const oldDocSize = editor._tiptapEditor.state.doc.nodeSize;
        const startPos = editor._tiptapEditor.state.selection.from;
        const endPos = editor._tiptapEditor.state.selection.to;
        const replacementBlocks = editor.getSelection()?.blocks || [
          editor.getTextCursorPosition().block,
        ];

        editor.replaceBlocks(replacementBlocks, props.originalBlocks as any[]);

        const newDocSize = editor._tiptapEditor.state.doc.nodeSize;

        editor._tiptapEditor.view.dispatch(
          editor._tiptapEditor.state.tr.setSelection(
            TextSelection.create(
              editor._tiptapEditor.state.doc,
              startPos,
              endPos + newDocSize - oldDocSize
            )
          )
        );

        editor.focus();
      }}
    />
  );
};

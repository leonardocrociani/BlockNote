import { mockAIReplaceSelection } from "@blocknote/core";
import { RiLoopLeftFill } from "react-icons/ri";

import { useComponentsContext } from "../../../editor/ComponentsContext";
import { useBlockNoteEditor } from "../../../hooks/useBlockNoteEditor";
import { useDictionary } from "../../../i18n/dictionary";
import { AIInlineToolbarProps } from "../AIInlineToolbarProps";

export const RetryButton = (
  props: AIInlineToolbarProps & {
    updating: boolean;
    setUpdating: (updating: boolean) => void;
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
      icon={!props.updating && <RiLoopLeftFill />}
      mainTooltip={dict.ai_inline_toolbar.retry}
      label={dict.ai_inline_toolbar.retry}
      onClick={async () => {
        props.setUpdating(true);
        // editor.focus();
        await mockAIReplaceSelection(editor, props.prompt);
        props.setUpdating(false);
      }}>
      {props.updating && dict.ai_inline_toolbar.updating}
    </Components.AIInlineToolbar.Button>
  );
};

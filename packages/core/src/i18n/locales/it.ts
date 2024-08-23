export const it = {
    slash_menu: {
        heading: {
            title: "Intestazione 1",
            subtext: "Intestazione di primo livello",
            aliases: ["h", "heading1", "h1"],
            group: "Intestazioni",
        },
        heading_2: {
            title: "Intestazione 2",
            subtext: "Intestazione di sezione principale",
            aliases: ["h2", "heading2", "subheading"],
            group: "Intestazioni",
        },
        heading_3: {
            title: "Intestazione 3",
            subtext: "Intestazione di sottosezione e gruppo",
            aliases: ["h3", "heading3", "subheading"],
            group: "Intestazioni",
        },
        numbered_list: {
            title: "Elenco Numerato",
            subtext: "Elenco con elementi ordinati",
            aliases: ["ol", "li", "elenco", "elenconumerato", "elenco numerato"],
            group: "Blocchi di base",
        },
        bullet_list: {
            title: "Elenco Puntato",
            subtext: "Elenco con elementi non ordinati",
            aliases: ["ul", "li", "elenco", "elencopuntato", "elenco puntato"],
            group: "Blocchi di base",
        },
        check_list: {
            title: "Elenco di controllo",
            subtext: "Elenco con caselle di controllo",
            aliases: [
                "ul",
                "li",
                "elenco",
                "elencodicontrollo",
                "elenco di controllo",
                "elenco spuntato",
                "caselladicontrollo",
            ],
            group: "Blocchi di base",
        },
        paragraph: {
            title: "Paragrafo",
            subtext: "Il corpo del tuo documento",
            aliases: ["p", "paragrafo"],
            group: "Blocchi di base",
        },
        table: {
            title: "Tabella",
            subtext: "Tabella con celle modificabili",
            aliases: ["tabella"],
            group: "Avanzato",
        },
        image: {
            title: "Immagine",
            subtext: "Immagine ridimensionabile con didascalia",
            aliases: [
                "immagine",
                "caricaimmagine",
                "caricamento",
                "img",
                "foto",
                "media",
                "url",
            ],
            group: "Media",
        },
        video: {
            title: "Video",
            subtext: "Video ridimensionabile con didascalia",
            aliases: [
                "video",
                "caricavideo",
                "caricamento",
                "mp4",
                "film",
                "media",
                "url",
            ],
            group: "Media",
        },
        audio: {
            title: "Audio",
            subtext: "Audio incorporato con didascalia",
            aliases: [
                "audio",
                "caricaaudio",
                "caricamento",
                "mp3",
                "suono",
                "media",
                "url",
            ],
            group: "Media",
        },
        file: {
            title: "File",
            subtext: "File incorporato",
            aliases: ["file", "caricamento", "incorpora", "media", "url"],
            group: "Media",
        },
        emoji: {
            title: "Emoji",
            subtext: "Cerca e inserisci un'emoji",
            aliases: ["emoji", "emote", "emozione", "faccia"],
            group: "Altri",
        },
    },
    placeholders: {
        default: "Inserisci testo o digita '/' per i comandi",
        heading: "Intestazione",
        bulletListItem: "Elenco",
        numberedListItem: "Elenco",
        checkListItem: "Elenco",
    },
    file_blocks: {
        image: {
            add_button_text: "Aggiungi immagine",
        },
        video: {
            add_button_text: "Aggiungi video",
        },
        audio: {
            add_button_text: "Aggiungi audio",
        },
        file: {
            add_button_text: "Aggiungi file",
        },
    },
    side_menu: {
        add_block_label: "Aggiungi blocco",
        drag_handle_label: "Apri menu blocchi",
    },
    drag_handle: {
        delete_menuitem: "Elimina",
        colors_menuitem: "Colori",
    },
    table_handle: {
        delete_column_menuitem: "Elimina colonna",
        delete_row_menuitem: "Elimina riga",
        add_left_menuitem: "Aggiungi colonna a sinistra",
        add_right_menuitem: "Aggiungi colonna a destra",
        add_above_menuitem: "Aggiungi riga sopra",
        add_below_menuitem: "Aggiungi riga sotto",
    },
    suggestion_menu: {
        no_items_title: "Nessun elemento trovato",
        loading: "Caricamento…",
    },
    color_picker: {
        text_title: "Testo",
        background_title: "Sfondo",
        colors: {
            default: "Predefinito",
            gray: "Grigio",
            brown: "Marrone",
            red: "Rosso",
            orange: "Arancione",
            yellow: "Giallo",
            green: "Verde",
            blue: "Blu",
            purple: "Viola",
            pink: "Rosa",
        },
    },

    formatting_toolbar: {
        bold: {
            tooltip: "Grassetto",
            secondary_tooltip: "Mod+B",
        },
        italic: {
            tooltip: "Corsivo",
            secondary_tooltip: "Mod+I",
        },
        underline: {
            tooltip: "Sottolineato",
            secondary_tooltip: "Mod+U",
        },
        strike: {
            tooltip: "Barrato",
            secondary_tooltip: "Mod+Shift+S",
        },
        code: {
            tooltip: "Codice",
            secondary_tooltip: "",
        },
        colors: {
            tooltip: "Colori",
        },
        link: {
            tooltip: "Crea collegamento",
            secondary_tooltip: "Mod+K",
        },
        file_caption: {
            tooltip: "Modifica didascalia",
            input_placeholder: "Modifica didascalia",
        },
        file_replace: {
            tooltip: {
                image: "Sostituisci immagine",
                video: "Sostituisci video",
                audio: "Sostituisci audio",
                file: "Sostituisci file",
            } as Record<string, string>,
        },
        file_rename: {
            tooltip: {
                image: "Rinomina immagine",
                video: "Rinomina video",
                audio: "Rinomina audio",
                file: "Rinomina file",
            } as Record<string, string>,
            input_placeholder: {
                image: "Rinomina immagine",
                video: "Rinomina video",
                audio: "Rinomina audio",
                file: "Rinomina file",
            } as Record<string, string>,
        },
        file_download: {
            tooltip: {
                image: "Scarica immagine",
                video: "Scarica video",
                audio: "Scarica audio",
                file: "Scarica file",
            } as Record<string, string>,
        },
        file_delete: {
            tooltip: {
                image: "Elimina immagine",
                video: "Elimina video",
                audio: "Elimina audio",
                file: "Elimina file",
            } as Record<string, string>,
        },
        file_preview_toggle: {
            tooltip: "Attiva/disattiva anteprima",
        },
        nest: {
            tooltip: "Annida blocco",
            secondary_tooltip: "Tab",
        },
        unnest: {
            tooltip: "Rimuovi nidificazione blocco",
            secondary_tooltip: "Shift+Tab",
        },
        align_left: {
            tooltip: "Allinea testo a sinistra",
        },
        align_center: {
            tooltip: "Allinea testo al centro",
        },
        align_right: {
            tooltip: "Allinea testo a destra",
        },
        align_justify: {
            tooltip: "Giustifica testo",
        },
    },
    file_panel: {
        upload: {
            title: "Caricamento",
            file_placeholder: {
                image: "Carica immagine",
                video: "Carica video",
                audio: "Carica audio",
                file: "Carica file",
            } as Record<string, string>,
            upload_error: "Errore: Caricamento fallito",
        },
        embed: {
            title: "Incorpora",
            embed_button: {
                image: "Incorpora immagine",
                video: "Incorpora video",
                audio: "Incorpora audio",
                file: "Incorpora file",
            } as Record<string, string>,
            url_placeholder: "Inserisci URL",
        },
    },
    link_toolbar: {
        delete: {
            tooltip: "Rimuovi collegamento",
        },
        edit: {
            text: "Modifica collegamento",
            tooltip: "Modifica",
        },
        open: {
            tooltip: "Apri in una nuova scheda",
        },
        form: {
            title_placeholder: "Modifica titolo",
            url_placeholder: "Modifica URL",
        },
    },
    generic: {
        ctrl_shortcut: "Ctrl",
    },
};

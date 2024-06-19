'use client';
import { Editor, EditorProps, Monaco } from '@monaco-editor/react';
import * as MonacoGlobal from 'monaco-editor';
import { GithubDark } from './themes/github-dark';
import { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";

loader.config({ monaco });

export default function MonacoEditor(props: EditorProps) {
    const onMount = (editor: MonacoGlobal.editor.IStandaloneCodeEditor, monaco: Monaco) => {
        monaco.editor.defineTheme('github-dark', GithubDark);
        monaco.editor.setTheme('github-dark');
    };

    return <Editor language="mysql" {...props} onMount={onMount} />;
}

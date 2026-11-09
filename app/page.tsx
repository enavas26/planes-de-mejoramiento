"use client";
import {useEffect,useMemo,useState} from "react";
import {createClient,SupabaseClient,User} from "@supabase/supabase-js";
type Row=Record<string,any>;
const url=process.env.NEXT_PUBLIC_SUPABASE_URL||"",key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||"";
const db:SupabaseClient|null=url&&key?createClient(url,key):null;
const modules=[["inicio","Panel general"],["planes","Planes de mejoramiento"],["hallazgos","Hallazgos"],["acciones","Acciones de mejora"],["seguimientos","Seguimientos"],["alertas","Alertas"],["informes","Informes"],["evidencias","Evidencias"],["usuarios","Usuarios y roles"],["configuracion","Configuración"],["respaldos","Respaldos"]];
const labels:Record<string,string>={draft:"Borrador",active:"Activo",closed:"Cerrado",archived:"Archivado",pending:"No iniciada",in_progress:"En ejecución",submitted:"Soporte cargado",approved:"Aprobada",adjustments_required:"Requiere ajustes",overdue:"Vencida",closed_action:"Cerrada",programado:"Programado",en_proceso:"En proceso",cerrado:"Cerrado"};
const pct=(n:number)=>Math.round(Number(n)||0)+"%";
export default function Page(){
 const [user,setUser]=useState<User|null>(null),[email,setEmail]=useState(""),[password,setPassword]=useState(""),[section,setSection]=useState("inicio"),[rows,setRows]=useState<Record<string,Row[]>>({}),[profiles,setProfiles]=useState<Row[]>([]),[role,setRole]=useState(""),[loading,setLoading]=useState(false),[msg,setMsg]=useState(""),[search,setSearch]=useState(""),[showForm,setShowFoֻǱ˞
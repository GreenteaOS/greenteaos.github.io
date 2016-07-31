// aboutdlg.cpp : implementation of the CAboutDlg class
//
/////////////////////////////////////////////////////////////////////////////

#include "ntoskrnl.h"
#include "stdafx.h"
#include "resource.h"

#include "app_cfg.h"

#include <mmreg.h>              // Кстати, мы говорим по-русски!
#include <msacm.h>              // Èíòåðôåéñ ACM

#include "tmtr.h"
#include "glwind.h"
#include "WinInd.h"
#include "WinRandomBase.h"
//#include "randomcode.h"
#include "AboutView.h"
#include "MainFrm.h"
 
#include "aboutdlg.h"

LRESULT CAboutDlg::OnInitDialog(UINT /*uMsg*/, WPARAM /*wParam*/, LPARAM /*lParam*/, BOOL& /*bHandled*/)
{
   TCHAR cpr[] = _T("(c) Copyright 2016");
   CString desc;

   CenterWindow(GetParent());

   m_s_desc=GetDlgItem(IDC_STATIC_DESC);
   m_hc1.SubclassWindow(GetDlgItem(IDC_STATIC_S1));
   m_hc2.SubclassWindow(GetDlgItem(IDC_STATIC_S2));
   m_s3=GetDlgItem(IDC_STATIC_S3);

   desc.Format(_T("%s\n\n%s"), pwndMain->GetInfo(_T("ProductName")),cpr);
   
   
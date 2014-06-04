InDBFS - Overview
=================

<p style='text-align:justify'>This project tends to provide a polyfill for the FileSystem as specified in W3C specification <a href='http://dev.w3.org/2009/dap/file-system/file-dir-sys.html'>here.</a> Nowadays (02/06/2013) the native support for the said FileSystem is present in Chrome only while plans of Firefox and IExplorer dev teams regarding it are unclear. W3C spec is still in a recomendation state where documentation is a working draft.</p>

Requirements and Decisions
==========================
By means of the InDBFS I'd like to provide the FileSystem functionality in the non supportive environments. I'm targeting the IE10+, Chrome, Firefox and Opera. Chrome has a native support, but that one maybe disabled, as in the case of Incognito Mode, so the InDBFS should provide the same functionality in that case too.<br>
My goal is to use natively available facilities as much as possible. As an outcome of those I've made the following decisions:
<ul>
  <li>
    Storage: IndexedDB is a very popular choice in a similar projects. It's well supported in all of the Majors.
  </li>
  <li>
    ArrayBuffer: Targeted environments are expeced to natively support ArrayBuffer object. All of the data, texts and binaries, will be stored as ArrayBuffer. It's supported, it's easy to create from the native Blob object and as easy to convert into the native Blob back.
  </li>
  <li>
    Blob: Targeted environments are expeced to natively support Blob object. If I could store Blob in IndexedDB - I'd rather do, but Chrome doesn't support it yet.
  </li>
</ul>
